import { cn } from "@/lib/utils";

interface CalendarDayProps {
  day: number;
  inMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  hasRecords: boolean;
  indicators: string[];
  onSelect: () => void;
}

export function CalendarDay({
  day,
  inMonth,
  isToday,
  isSelected,
  hasRecords,
  indicators,
  onSelect,
}: CalendarDayProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={!inMonth}
      className={cn(
        "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-[10px] transition-[background-color,opacity] duration-200",
        !inMonth && "pointer-events-none opacity-40",
        isSelected && "bg-planat-primary-light/30",
        !isSelected && isToday && "ring-2 ring-planat-primary-light/50",
      )}
    >
      <span
        className={cn(
          "text-[length:var(--text-caption)] font-medium",
          isToday ? "text-planat-primary-dark" : "text-planat-text-primary",
        )}
      >
        {day}
      </span>
      {hasRecords && inMonth ? (
        <span className="flex h-3 items-center gap-px text-[10px] leading-none">
          {indicators.map((icon, index) => (
            <span key={`${icon}-${index}`} aria-hidden="true">
              {icon}
            </span>
          ))}
        </span>
      ) : (
        <span className="h-3" aria-hidden="true" />
      )}
    </button>
  );
}
