import { AnimatePresence, motion } from "framer-motion";
import { EmptyState } from "@/components/common/EmptyState";
import { Text } from "@/components/common/Typography";
import type { CalendarRecord } from "@/types";
import { dateSwapTransition } from "@/lib/motion";
import { formatTimelineDate } from "@/utils/calendar";
import { CalendarRecordCard } from "./CalendarRecordCard";

interface DailyRecordSummaryProps {
  selectedDate: string;
  records: CalendarRecord[];
}

export function DailyRecordSummary({
  selectedDate,
  records,
}: DailyRecordSummaryProps) {
  const dateLabel = formatTimelineDate(selectedDate);

  return (
    <section className="flex flex-col gap-3">
      <Text
        variant="sectionTitle"
        as="h2"
        className="text-white font-semibold text-[18px]"
      >
        {dateLabel} 기록
      </Text>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={dateSwapTransition}
          className="flex flex-col gap-2"
        >
          {records.length > 0 ? (
            records.map((record) => (
              <CalendarRecordCard
                key={record.id}
                record={record}
                timeLabel={
                  record.description?.match(/^\d{2}:\d{2}$/)
                    ? record.description
                    : undefined
                }
              />
            ))
          ) : (
            <EmptyState
              title="이날은 아직 함께한 기록이 없어요."
              description="오늘의 작은 기록을 남겨볼까요?"
              titleClassName="text-[length:var(--text-caption)] font-medium text-white"
              className="rounded-[var(--radius-card)] bg-white/20 py-10"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
