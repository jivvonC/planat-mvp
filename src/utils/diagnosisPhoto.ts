import type { DiagnosisAnswer, DiagnosisQuestion, Plant } from "@/types";

const HEALTH_PROFILES: Record<
  Plant["healthStatus"],
  Record<string, string>
> = {
  "Needs Water": {
    "leaf-color-change": "yes",
    "tip-browning": "no",
    "soil-moisture": "no",
    "light-exposure": "indirect",
    "last-watering": "older",
  },
  "Needs Attention": {
    "leaf-color-change": "yes",
    "tip-browning": "yes",
    "soil-moisture": "yes",
    "light-exposure": "indirect",
    "last-watering": "recent",
  },
  Healthy: {
    "leaf-color-change": "no",
    "tip-browning": "no",
    "soil-moisture": "no",
    "light-exposure": "bright",
    "last-watering": "recent",
  },
};

export function inferDiagnosisAnswersFromPlant(
  plant: Plant,
  questions: DiagnosisQuestion[],
): DiagnosisAnswer[] {
  const profile = HEALTH_PROFILES[plant.healthStatus];

  return questions.map((question, stepIndex) => {
    const optionValue = profile[question.key] ?? question.options[0]?.value ?? "";
    const option =
      question.options.find((item) => item.value === optionValue) ??
      question.options[0];

    if (!option) {
      throw new Error(`No options configured for question: ${question.id}`);
    }

    return {
      stepIndex,
      questionKey: question.key,
      questionText: question.text,
      optionValue: option.value,
      optionLabel: option.label,
    };
  });
}
