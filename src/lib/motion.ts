import type { Transition } from "framer-motion";

export const MOTION_EASE: Transition["ease"] = "easeOut";

/** Shared fade / enter durations across main app screens */
export const DURATION = {
  fast: 0.25,
  normal: 0.35,
  relaxed: 0.4,
  page: 0.45,
} as const;

export const ENTER_Y = {
  subtle: 8,
  default: 12,
} as const;

export const FLOAT = {
  duration: 6,
  offset: 10,
} as const;

export const ORBIT_PULSE = {
  duration: 3,
} as const;

export const SHEET_DURATION = DURATION.normal;

export function fadeTransition(duration: number = DURATION.relaxed): Transition {
  return { duration, ease: MOTION_EASE };
}

export function fadeInUpTransition(
  options: { duration?: number; delay?: number } = {},
): Transition {
  const { duration = DURATION.relaxed, delay } = options;
  return {
    duration,
    ease: MOTION_EASE,
    ...(delay !== undefined ? { delay } : {}),
  };
}

export function listStaggerDelay(index: number, step = 0.05): number {
  return index * step;
}

export const tabPanelTransition = fadeTransition(DURATION.normal);

export const dateSwapTransition = fadeTransition(DURATION.fast);
