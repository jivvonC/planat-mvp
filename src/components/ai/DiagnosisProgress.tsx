import { motion } from "framer-motion";
import { Text } from "@/components/common/Typography";

interface DiagnosisProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function DiagnosisProgress({
  currentStep,
  totalSteps,
}: DiagnosisProgressProps) {
  const progress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className="flex flex-col gap-2">
      <Text variant="caption" muted className="text-center">
        Question {currentStep} / {totalSteps}
      </Text>
      <div
        className="h-2 overflow-hidden rounded-full bg-white/20"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`진단 진행 ${currentStep} / ${totalSteps}`}
      >
        <motion.div
          className="h-full rounded-full bg-planat-primary-light"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
