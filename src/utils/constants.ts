export const LAYOUT = {
  MOBILE_WIDTH: 393,
  MOBILE_HEIGHT: 852,
  HEADER_HEIGHT: 56,
  BOTTOM_NAV_HEIGHT: 72,
  SCREEN_MARGIN_X: 16,
  HERO_MIN_RATIO: 0.25,
  HERO_MAX_RATIO: 0.35,
  MIN_TOUCH_TARGET: 44,
} as const;

/** Shared Tailwind class strings for layout patterns from 09_LAYOUT_SYSTEM.md */
export const LAYOUT_CLASSES = {
  hero: "flex min-h-[25svh] max-h-[35svh] flex-col items-center justify-center",
  screenStack: "flex flex-col gap-4",
  sectionStack: "flex flex-col gap-3",
} as const;

export const SPACING = {
  XS: 8,
  SM: 16,
  MD: 24,
  LG: 32,
  XL: 40,
  XXL: 48,
} as const;

export const RADIUS = {
  BUTTON: 8,
  INPUT: 12,
  CARD: 16,
  SHEET: 16,
} as const;

export const ROUTES = {
  PLANTS: "/plants",
  CALENDAR: "/calendar",
  STORE: "/store",
  NOTIFICATIONS: "/notifications",
} as const;
