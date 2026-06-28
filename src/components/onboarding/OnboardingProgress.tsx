import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function OnboardingProgress({
  currentStep,
  totalSteps,
  className,
}: OnboardingProgressProps) {
  const progress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-white/25"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`온보딩 진행 ${currentStep} / ${totalSteps}`}
      >
        <motion.div
          className="h-full rounded-full bg-planat-primary-light"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
