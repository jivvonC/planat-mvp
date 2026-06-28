import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Text } from "@/components/common/Typography";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import { cn } from "@/lib/utils";

interface OnboardingLayoutProps {
  stepIndex: number;
  totalSteps: number;
  showBack?: boolean;
  onBack?: () => void;
  illustration?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  footer: React.ReactNode;
  animateFooter?: boolean;
  className?: string;
  textClassName?: string;
  exiting?: boolean;
}

export function OnboardingLayout({
  stepIndex,
  totalSteps,
  showBack = false,
  onBack,
  illustration,
  title,
  description,
  footer,
  animateFooter = true,
  className,
  textClassName,
  exiting = false,
}: OnboardingLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex min-h-svh flex-col bg-gradient-to-b from-[#425B62] from-0% via-[#32A9A9] via-60% to-[#32A9A9] to-100% px-[var(--spacing-screen-x)] pb-[calc(24px+env(safe-area-inset-bottom))] pt-[calc(16px+env(safe-area-inset-top))]",
        className,
      )}
    >
      <div className="mb-6 grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-3">
        {showBack ? (
          <button
            type="button"
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform active:scale-[0.97]"
            aria-label="이전"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
        ) : (
          <div aria-hidden="true" />
        )}
        <OnboardingProgress currentStep={stepIndex} totalSteps={totalSteps} />
        <div aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        {illustration ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex w-full justify-center overflow-visible"
          >
            {illustration}
          </motion.div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className={cn("flex w-full flex-col gap-4 text-center", textClassName)}
        >
          <div className="flex flex-col gap-2">{title}</div>
          {description ? (
            <div className="flex flex-col gap-2">{description}</div>
          ) : null}
        </motion.div>
      </div>

      {animateFooter ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          className="mt-8 flex w-full flex-col gap-2"
        >
          {footer}
        </motion.div>
      ) : (
        <div className="mt-8 flex w-full flex-col gap-2">{footer}</div>
      )}
    </motion.div>
  );
}

interface OnboardingTitleProps {
  lines: string[];
  className?: string;
}

const PLANAT_PATTERN = /(Planat)/g;

function renderTitleLine(line: string) {
  return line.split(PLANAT_PATTERN).map((part, index) => {
    if (part === "Planat") {
      return (
        <span key={`planat-${index}`} className="font-tektur font-normal">
          {part}
        </span>
      );
    }

    return part;
  });
}

export function OnboardingTitle({ lines, className }: OnboardingTitleProps) {
  return (
    <>
      {lines.map((line) => (
        <Text
          key={line}
          variant="pageTitle"
          as="h1"
          className={cn(
            "text-white font-semibold leading-snug text-[length:var(--text-page-title)]",
            className,
          )}
        >
          {renderTitleLine(line)}
        </Text>
      ))}
    </>
  );
}

interface OnboardingDescriptionProps {
  lines: string[];
  className?: string;
}

export function OnboardingDescription({
  lines,
  className,
}: OnboardingDescriptionProps) {
  return (
    <>
      {lines.map((line) => (
        <Text
          key={line}
          variant="caption"
          className={cn(
            "text-white/85 leading-relaxed font-medium",
            className,
          )}
        >
          {line}
        </Text>
      ))}
    </>
  );
}
