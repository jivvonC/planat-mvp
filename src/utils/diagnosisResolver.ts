import type {
  DiagnosisResultContent,
  DiagnosisResultRule,
  DiagnosisResultsConfig,
  DiagnosisSession,
} from "@/types";
import { getSessionAnswerProfile } from "@/utils/diagnosisSession";

const MAX_OBSERVATIONS = 3;

function scoreRule(
  match: Record<string, string>,
  profile: Record<string, string>,
): number {
  return Object.entries(match).reduce(
    (score, [key, value]) => (profile[key] === value ? score + 1 : score),
    0,
  );
}

function buildObservations(
  session: DiagnosisSession,
  priorityKeys: string[],
  observationLabels: DiagnosisResultsConfig["observationLabels"],
): string[] {
  const profile = getSessionAnswerProfile(session);
  const observations: string[] = [];

  for (const key of priorityKeys) {
    const value = profile[key];
    if (!value) {
      continue;
    }

    const label = observationLabels[key]?.[value];
    if (label && !observations.includes(label)) {
      observations.push(label);
    }

    if (observations.length >= MAX_OBSERVATIONS) {
      break;
    }
  }

  return observations;
}

function ruleToResult(
  rule: DiagnosisResultRule,
  session: DiagnosisSession,
  observationLabels: DiagnosisResultsConfig["observationLabels"],
): DiagnosisResultContent {
  return {
    resultId: rule.id,
    title: rule.title,
    reassurance: rule.reassurance,
    observations: buildObservations(
      session,
      rule.priorityObservationKeys,
      observationLabels,
    ),
    whyHappened: rule.whyHappened,
    todayCare: rule.todayCare,
    preventionTip: rule.preventionTip,
  };
}

export function resolveDiagnosisResult(
  session: DiagnosisSession,
  config: DiagnosisResultsConfig,
): DiagnosisResultContent {
  const flowResults = config.flows[session.flowId];
  if (!flowResults) {
    throw new Error(`No diagnosis results configured for flow: ${session.flowId}`);
  }

  const profile = getSessionAnswerProfile(session);

  let bestRule: DiagnosisResultRule | null = null;
  let bestScore = 0;

  for (const rule of flowResults.rules) {
    const score = scoreRule(rule.match, profile);
    const requiredMatches = Object.keys(rule.match).length;

    if (score === requiredMatches && score > bestScore) {
      bestRule = rule;
      bestScore = score;
    }
  }

  if (bestRule) {
    return ruleToResult(bestRule, session, config.observationLabels);
  }

  const fallback = flowResults.default;
  return {
    resultId: fallback.id,
    title: fallback.title,
    reassurance: fallback.reassurance,
    observations: buildObservations(
      session,
      fallback.priorityObservationKeys,
      config.observationLabels,
    ),
    whyHappened: fallback.whyHappened,
    todayCare: fallback.todayCare,
    preventionTip: fallback.preventionTip,
  };
}
