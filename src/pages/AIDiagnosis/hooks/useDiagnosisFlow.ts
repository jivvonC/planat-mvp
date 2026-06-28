import { useCallback, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDiagnosisStore } from "@/store/diagnosisStore";
import type { DiagnosisQuestion } from "@/types";

const EMPTY_QUESTIONS: DiagnosisQuestion[] = [];

export function useDiagnosisFlow() {
  const navigate = useNavigate();
  const { id: plantId = "" } = useParams();

  const session = useDiagnosisStore((state) => state.session);
  const pendingOptionId = useDiagnosisStore((state) => state.pendingOptionId);
  const flowId = useDiagnosisStore((state) => state.session?.flowId);
  const flows = useDiagnosisStore((state) => state.flows);
  const questions = useMemo(() => {
    if (!flowId) {
      return EMPTY_QUESTIONS;
    }
    return (
      flows.find((flow) => flow.id === flowId)?.questions ?? EMPTY_QUESTIONS
    );
  }, [flowId, flows]);
  const startSession = useDiagnosisStore((state) => state.startSession);
  const selectAnswer = useDiagnosisStore((state) => state.selectAnswer);
  const goToNext = useDiagnosisStore((state) => state.goToNext);

  useEffect(() => {
    if (plantId) {
      startSession(plantId, undefined, "manual");
    }
  }, [plantId, startSession]);

  useEffect(() => {
    if (session?.status === "completed" && plantId) {
      navigate(`/plants/${plantId}/diagnosis/result`, { replace: true });
    }
  }, [session?.status, plantId, navigate]);

  const currentQuestion =
    session?.status === "in-progress"
      ? questions[session.currentStep]
      : undefined;

  const currentStep = session ? session.currentStep + 1 : 1;
  const totalSteps = questions.length;
  const isComplete = session?.status === "completed";
  const canProceed = Boolean(pendingOptionId) && !isComplete;

  const handleNext = useCallback(() => {
    goToNext();
  }, [goToNext]);

  return {
    plantId,
    session,
    currentQuestion,
    currentStep,
    totalSteps,
    pendingOptionId,
    isComplete,
    canProceed,
    selectAnswer,
    handleNext,
  };
}
