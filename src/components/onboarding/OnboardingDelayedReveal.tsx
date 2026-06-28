import type { ReactNode } from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

const REVEAL_EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

export const ONBOARDING_ACTION_DELAY = 1;

export function onboardingRevealTransition(
  delayOffset = 0,
): Transition {
  return {
    duration: 0.85,
    delay: ONBOARDING_ACTION_DELAY + delayOffset,
    ease: REVEAL_EASE,
  };
}

interface OnboardingDelayedRevealProps {
  children: ReactNode;
  className?: string;
  delayOffset?: number;
}

export function OnboardingDelayedReveal({
  children,
  className,
  delayOffset = 0,
}: OnboardingDelayedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={onboardingRevealTransition(delayOffset)}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
