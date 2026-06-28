import { cn } from "@/lib/utils";
import type { CalendarTab } from "@/store/calendarStore";

interface CalendarSegmentedTabProps {
  activeTab: CalendarTab;
  onTabChange: (tab: CalendarTab) => void;
}

const TABS: { id: CalendarTab; label: string }[] = [
  { id: "calendar", label: "캘린더" },
  { id: "timeline", label: "타임라인" },
];

export function CalendarSegmentedTab({
  activeTab,
  onTabChange,
}: CalendarSegmentedTabProps) {
  return (
    <div
      className="flex border-b border-white/25"
      role="tablist"
      aria-label="캘린더 보기"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative min-h-11 flex-1 text-[length:var(--text-caption)] font-medium transition-colors duration-200",
              isActive
                ? "text-white font-semibold text-[16px]"
                : "text-white/80 font-medium text-[16px]",
            )}
          >
            {tab.label}
            <span
              className={cn(
                "absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-white transition-opacity duration-200",
                isActive ? "opacity-100" : "opacity-0",
              )}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
}
