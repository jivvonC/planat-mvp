import type { RecentActivity } from "@/types";

function toDateOnly(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function getCareDaysTogether(
  careStartedAt: string | undefined,
  activities: RecentActivity[],
): number {
  const fallbackStart =
    activities.length > 0
      ? [...activities].sort((a, b) => a.date.localeCompare(b.date))[0]?.date
      : undefined;
  const startValue = careStartedAt ?? fallbackStart;

  if (!startValue) {
    return 1;
  }

  const start = toDateOnly(startValue);
  const today = toDateOnly(new Date().toISOString().split("T")[0] ?? "");
  const diffMs = today.getTime() - start.getTime();
  const days = Math.floor(diffMs / 86400000) + 1;

  return Math.max(1, days);
}
