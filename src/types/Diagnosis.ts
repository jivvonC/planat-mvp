export interface DiagnosisHistory {
  id: string;
  plantId: string;
  flowId: string;
  result: string;
  cause: string;
  solution: string;
  answers: DiagnosisAnswer[];
  createdAt: string;
}

export type DiagnosisAnswerType = "yes-no" | "multiple-choice";

export interface DiagnosisOption {
  id: string;
  label: string;
  value: string;
  emoji?: string;
}

export interface DiagnosisQuestion {
  id: string;
  key: string;
  text: string;
  guide: string;
  answerType: DiagnosisAnswerType;
  options: DiagnosisOption[];
}

export interface DiagnosisFlow {
  id: string;
  title: string;
  description?: string;
  questions: DiagnosisQuestion[];
}

export interface DiagnosisAnswer {
  stepIndex: number;
  questionKey: string;
  questionText: string;
  optionValue: string;
  optionLabel: string;
}

export type DiagnosisMode = "manual" | "photo";

export type DiagnosisSessionStatus = "in-progress" | "completed";

export interface DiagnosisSession {
  flowId: string;
  plantId: string;
  mode: DiagnosisMode;
  currentStep: number;
  answers: DiagnosisAnswer[];
  status: DiagnosisSessionStatus;
  photoUrl?: string;
  startedAt: string;
  completedAt?: string;
}

export interface DiagnosisResultContent {
  resultId: string;
  title: string;
  reassurance: string;
  observations: string[];
  whyHappened: string[];
  todayCare: string[];
  preventionTip: string;
}

export interface DiagnosisResultRule {
  id: string;
  match: Record<string, string>;
  title: string;
  reassurance: string;
  priorityObservationKeys: string[];
  whyHappened: string[];
  todayCare: string[];
  preventionTip: string;
}

export interface DiagnosisFlowResults {
  rules: DiagnosisResultRule[];
  default: Omit<DiagnosisResultRule, "id" | "match"> & { id: string };
}

export interface DiagnosisResultsConfig {
  observationLabels: Record<string, Record<string, string>>;
  flows: Record<string, DiagnosisFlowResults>;
}

export const DEFAULT_DIAGNOSIS_FLOW_ID = "general-health";
