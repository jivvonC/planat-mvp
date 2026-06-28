import type { CalendarRecord, CareEventType } from "@/types";
import { DAILY_RECORD_ORDER } from "./careEvents";

export function sortRecordsByDailyOrder(
  records: CalendarRecord[],
): CalendarRecord[] {
  return [...records].sort((a, b) => {
    const orderA = DAILY_RECORD_ORDER.indexOf(a.type);
    const orderB = DAILY_RECORD_ORDER.indexOf(b.type);
    const typeOrder = orderA - orderB;
    if (typeOrder !== 0) {
      return typeOrder;
    }
    return b.id.localeCompare(a.id);
  });
}

export function getUniqueEventTypesForDate(
  records: CalendarRecord[],
): CareEventType[] {
  const types = new Set<CareEventType>();
  for (const record of records) {
    types.add(record.type);
  }
  return DAILY_RECORD_ORDER.filter((type) => types.has(type));
}

export function formatTimelineDate(date: string): string {
  const parsed = new Date(`${date}T12:00:00`);
  return parsed.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
}

export function formatRecordTime(createdAt: string): string {
  const parsed = new Date(createdAt);
  return parsed.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function getMonthDays(year: number, month: number): Date[] {
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: Date[] = [];

  for (let i = 0; i < startOffset; i += 1) {
    days.push(new Date(year, month, i - startOffset + 1));
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(new Date(year, month, day));
  }

  while (days.length % 7 !== 0) {
    days.push(
      new Date(year, month + 1, days.length - startOffset - daysInMonth + 1),
    );
  }

  return days;
}

export function toDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
