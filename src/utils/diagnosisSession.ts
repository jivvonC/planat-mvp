import type {
  DiagnosisAnswer,
  DiagnosisFlow,
  DiagnosisQuestion,
  DiagnosisSession,
} from "@/types";

export function getFlowQuestions(
  flows: DiagnosisFlow[],
  flowId: string,
): DiagnosisQuestion[] {
  return flows.find((flow) => flow.id === flowId)?.questions ?? [];
}

export function getFlowById(
  flows: DiagnosisFlow[],
  flowId: string,
): DiagnosisFlow | undefined {
  return flows.find((flow) => flow.id === flowId);
}

/** Map of questionKey → optionValue for result resolution. */
export function getSessionAnswerProfile(
  session: DiagnosisSession,
): Record<string, string> {
  return Object.fromEntries(
    session.answers.map((answer) => [answer.questionKey, answer.optionValue]),
  );
}

/** Ordered option values — useful for pattern-based result rules per flow. */
export function getSessionAnswerSequence(session: DiagnosisSession): string[] {
  return session.answers.map((answer) => answer.optionValue);
}

export function getSessionAnswersByStep(
  session: DiagnosisSession,
): DiagnosisAnswer[] {
  return [...session.answers].sort((a, b) => a.stepIndex - b.stepIndex);
}

export function isSessionComplete(
  session: DiagnosisSession,
  flow: DiagnosisFlow,
): boolean {
  return session.answers.length >= flow.questions.length;
}
