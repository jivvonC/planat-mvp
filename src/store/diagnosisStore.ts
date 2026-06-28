import { create } from "zustand";
import diagnosisResultsData from "@/data/diagnosisResults.json";
import { useActivityStore } from "@/store/activityStore";
import { useCalendarStore } from "@/store/calendarStore";
import { useNotificationStore } from "@/store/notificationStore";
import { usePlantStore } from "@/store/plantStore";
import type {
  DiagnosisAnswer,
  DiagnosisFlow,
  DiagnosisHistory,
  DiagnosisMode,
  DiagnosisOption,
  DiagnosisQuestion,
  DiagnosisResultContent,
  DiagnosisResultsConfig,
  DiagnosisSession,
} from "@/types";
import { DEFAULT_DIAGNOSIS_FLOW_ID } from "@/types/Diagnosis";
import { getCareEventIcon, recordCareEvent } from "@/utils/careEvents";
import { getFlowById, getFlowQuestions } from "@/utils/diagnosisSession";

interface DiagnosisStore {
  flows: DiagnosisFlow[];
  resultsConfig: DiagnosisResultsConfig;
  history: DiagnosisHistory[];
  session: DiagnosisSession | null;
  pendingOptionId: string | null;
  initialized: boolean;
  initialize: (
    flows: DiagnosisFlow[],
    history?: DiagnosisHistory[],
    resultsConfig?: DiagnosisResultsConfig,
  ) => void;
  startSession: (
    plantId: string,
    flowId?: string,
    mode?: DiagnosisMode,
  ) => void;
  completePhotoSession: (
    plantId: string,
    photoUrl: string,
    answers: DiagnosisAnswer[],
    flowId?: string,
  ) => void;
  selectAnswer: (optionId: string) => void;
  goToNext: () => void;
  resetSession: () => void;
  confirmDiagnosis: (
    result: DiagnosisResultContent,
  ) => DiagnosisHistory | null;
  getActiveFlow: () => DiagnosisFlow | undefined;
  getActiveQuestions: () => DiagnosisQuestion[];
  getCurrentQuestion: () => DiagnosisQuestion | undefined;
  getPendingOption: () => DiagnosisOption | undefined;
}

export const useDiagnosisStore = create<DiagnosisStore>((set, get) => ({
  flows: [],
  resultsConfig: diagnosisResultsData as unknown as DiagnosisResultsConfig,
  history: [],
  session: null,
  pendingOptionId: null,
  initialized: false,

  initialize: (flows, history = [], resultsConfig) =>
    set({
      flows,
      history,
      resultsConfig: resultsConfig ?? (diagnosisResultsData as unknown as DiagnosisResultsConfig),
      initialized: true,
    }),

  startSession: (plantId, flowId = DEFAULT_DIAGNOSIS_FLOW_ID, mode = "manual") =>
    set((state) => {
      if (
        state.session?.plantId === plantId &&
        state.session.flowId === flowId &&
        state.session.mode === mode &&
        (state.session.status === "in-progress" ||
          state.session.status === "completed")
      ) {
        return state;
      }

      return {
        session: {
          flowId,
          plantId,
          mode,
          currentStep: 0,
          answers: [],
          status: "in-progress",
          startedAt: new Date().toISOString(),
        },
        pendingOptionId: null,
      };
    }),

  completePhotoSession: (
    plantId,
    photoUrl,
    answers,
    flowId = DEFAULT_DIAGNOSIS_FLOW_ID,
  ) =>
    set({
      session: {
        flowId,
        plantId,
        mode: "photo",
        currentStep: Math.max(answers.length - 1, 0),
        answers,
        status: "completed",
        photoUrl,
        startedAt: new Date().toISOString(),
        completedAt: new Date().toISOString(),
      },
      pendingOptionId: null,
    }),

  selectAnswer: (optionId) => set({ pendingOptionId: optionId }),

  goToNext: () => {
    const state = get();
    const { session, pendingOptionId, flows } = state;

    if (!session || !pendingOptionId) {
      return;
    }

    const questions = getFlowQuestions(flows, session.flowId);
    const question = questions[session.currentStep];
    if (!question) {
      return;
    }

    const option = question.options.find((item) => item.id === pendingOptionId);
    if (!option) {
      return;
    }

    const answer: DiagnosisAnswer = {
      stepIndex: session.currentStep,
      questionKey: question.key,
      questionText: question.text,
      optionValue: option.value,
      optionLabel: option.label,
    };

    const isLastStep = session.currentStep >= questions.length - 1;

    if (isLastStep) {
      set({
        session: {
          ...session,
          answers: [...session.answers, answer],
          status: "completed",
          completedAt: new Date().toISOString(),
        },
        pendingOptionId: null,
      });
      return;
    }

    set({
      session: {
        ...session,
        answers: [...session.answers, answer],
        currentStep: session.currentStep + 1,
      },
      pendingOptionId: null,
    });
  },

  resetSession: () => set({ session: null, pendingOptionId: null }),

  confirmDiagnosis: (result) => {
    const { session } = get();
    if (!session || session.status !== "completed") {
      return null;
    }

    const record: DiagnosisHistory = {
      id: `diagnosis-${crypto.randomUUID()}`,
      plantId: session.plantId,
      flowId: session.flowId,
      result: result.title,
      cause: result.whyHappened.join(" "),
      solution: result.todayCare.join(" "),
      answers: session.answers,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      history: [record, ...state.history],
      session: null,
      pendingOptionId: null,
    }));

    const calendarStore = useCalendarStore.getState();
    const activityStore = useActivityStore.getState();
    const plantStore = usePlantStore.getState();

    recordCareEvent(
      {
        addRecord: calendarStore.addRecord,
        addActivity: activityStore.addActivity,
      },
      {
        plantId: session.plantId,
        type: "diagnosis",
        title: `${getCareEventIcon("diagnosis")} AI 진단 완료`,
        description: result.title,
      },
    );

    plantStore.applyDiagnosis(session.plantId, record.id);
    useNotificationStore
      .getState()
      .removeDiagnosisRecommendationsForPlant(session.plantId);

    return record;
  },

  getActiveFlow: () => {
    const { session, flows } = get();
    if (!session) {
      return undefined;
    }
    return getFlowById(flows, session.flowId);
  },

  getActiveQuestions: () => {
    const { session, flows } = get();
    if (!session) {
      return [];
    }
    return getFlowQuestions(flows, session.flowId);
  },

  getCurrentQuestion: () => {
    const { session } = get();
    if (!session || session.status === "completed") {
      return undefined;
    }
    const questions = get().getActiveQuestions();
    return questions[session.currentStep];
  },

  getPendingOption: () => {
    const question = get().getCurrentQuestion();
    const { pendingOptionId } = get();
    if (!question || !pendingOptionId) {
      return undefined;
    }
    return question.options.find((option) => option.id === pendingOptionId);
  },
}));
