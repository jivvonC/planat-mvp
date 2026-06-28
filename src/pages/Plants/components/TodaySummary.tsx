import type { HomeSummaryItem } from "@/hooks/useHomeSummary";
import { SummaryCard } from "@/pages/Plants/components/SummaryCard";

interface TodaySummaryProps {
  items: HomeSummaryItem[];
}

export function TodaySummary({ items }: TodaySummaryProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-2">
      {items.map((item, index) => (
        <SummaryCard
          key={item.id}
          emoji={item.emoji}
          title={item.title}
          count={item.count}
          to={item.to}
          index={index}
          className="w-full"
        />
      ))}
    </div>
  );
}
