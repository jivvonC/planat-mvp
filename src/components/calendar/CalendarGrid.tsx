import { ChevronLeft, ChevronRight } from "lucide-react";
import { Text } from "@/components/common/Typography";
import type { CareEventType } from "@/types";
import { getCareEventIcon } from "@/utils/careEvents";
import { getMonthDays, isSameDay, toDateString } from "@/utils/calendar";
import { CalendarDay } from "@/components/calendar/CalendarDay";

interface CalendarGridProps {
  month: Date;
  selectedDate: string;
  today: Date;
  datesWithRecords: Set<string>;
  eventTypesByDate: Record<string, CareEventType[]>;
  onMonthChange: (month: Date) => void;
  onSelectDate: (date: string) => void;
}

const WEEKDAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];

export function CalendarGrid({
  month,
  selectedDate,
  today,
  datesWithRecords,
  eventTypesByDate,
  onMonthChange,
  onSelectDate,
}: CalendarGridProps) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const days = getMonthDays(year, monthIndex);
  const monthLabel = month.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
  });

  return (
    <section className="rounded-[var(--radius-card)] bg-white/75 p-4 shadow-[var(--shadow-card)]">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          aria-label="이전 달"
          onClick={() => onMonthChange(new Date(year, monthIndex - 1, 1))}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-planat-text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <Text variant="cardTitle" as="h2">
          {monthLabel}
        </Text>
        <button
          type="button"
          aria-label="다음 달"
          onClick={() => onMonthChange(new Date(year, monthIndex + 1, 1))}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-planat-text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-1">
        {WEEKDAY_LABELS.map((label) => (
          <div
            key={label}
            className="text-center text-[length:var(--text-helper)] text-planat-text-secondary"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const dateString = toDateString(day);
          const inMonth = day.getMonth() === monthIndex;
          const isToday = isSameDay(day, today);
          const isSelected = dateString === selectedDate;
          const indicators = (eventTypesByDate[dateString] ?? [])
            .slice(0, 3)
            .map((type) => getCareEventIcon(type));

          return (
            <CalendarDay
              key={dateString + String(inMonth)}
              day={day.getDate()}
              inMonth={inMonth}
              isToday={isToday}
              isSelected={isSelected}
              hasRecords={datesWithRecords.has(dateString)}
              indicators={indicators}
              onSelect={() => onSelectDate(dateString)}
            />
          );
        })}
      </div>
    </section>
  );
}
