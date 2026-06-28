import { AnimatePresence, motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScreenContent } from "@/components/common/ScreenContent";
import { Text } from "@/components/common/Typography";
import {
  AnswerCard,
  DiagnosisComparison,
  DiagnosisProgress,
  ObservationGuide,
  QuestionCard,
} from "@/components/ai";
import { ScreenLayout } from "@/layouts/ScreenLayout";
import { useDiagnosisFlow } from "@/pages/AIDiagnosis/hooks/useDiagnosisFlow";
import { usePlantStore } from "@/store/plantStore";

export default function AIDiagnosisPage() {
  const {
    plantId,
    currentQuestion,
    currentStep,
    totalSteps,
    pendingOptionId,
    isComplete,
    canProceed,
    selectAnswer,
    handleNext,
  } = useDiagnosisFlow();

  const plant = usePlantStore((state) =>
    state.plants.find((item) => item.id === plantId),
  );

  if (!plant) {
    return <Navigate to="/plants" replace />;
  }

  return (
    <ScreenLayout
      title="AI 진단"
      showBack
      className="bg-gradient-to-b from-[#425B62] to-[#32A9A9]"
    >
      <ScreenContent className="flex flex-1 gap-5 pb-8">
        <div className="flex flex-col gap-1 text-center">
          <Text
            variant="caption"
            className="text-white font-semibold text-[18px]"
          >
            식물을 함께 살펴볼까요?
          </Text>
          <Text
            variant="helper"
            className="text-white/80 font-medium text-[12px]"
          >
            천천히 관찰하면서 답해보세요.
          </Text>
        </div>

        {isComplete ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] bg-white/90 px-6 py-10 text-center shadow-[var(--shadow-card)]">
            <Text variant="sectionTitle" as="h2">
              관찰을 모두 마쳤어요.
            </Text>
            <Text variant="caption" muted>
              {plant.nickname}와 함께한 답변이 저장되었어요.
              <br />
              진단 결과는 다음 단계에서 확인할 수 있어요.
            </Text>
          </div>
        ) : (
          <>
            <DiagnosisProgress
              currentStep={currentStep}
              totalSteps={totalSteps}
            />

            <AnimatePresence mode="wait">
              {currentQuestion ? (
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-4"
                >
                  <QuestionCard question={currentQuestion.text} />
                  <DiagnosisComparison
                    plantImage={plant.image}
                    questionKey={currentQuestion.key}
                  />
                  <ObservationGuide text={currentQuestion.guide} />

                  <div
                    className={
                      currentQuestion.answerType === "yes-no"
                        ? "flex gap-3"
                        : "flex flex-col gap-3"
                    }
                  >
                    {currentQuestion.options.map((option) => (
                      <AnswerCard
                        key={option.id}
                        option={option}
                        selected={pendingOptionId === option.id}
                        onSelect={() => selectAnswer(option.id)}
                        layout={
                          currentQuestion.answerType === "yes-no"
                            ? "half"
                            : "full"
                        }
                      />
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="mt-auto pt-2">
              <Button fullWidth disabled={!canProceed} onClick={handleNext}>
                다음
              </Button>
            </div>
          </>
        )}
      </ScreenContent>
    </ScreenLayout>
  );
}
