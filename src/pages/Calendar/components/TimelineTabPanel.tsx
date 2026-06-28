import { motion } from "framer-motion";
import { EmptyState } from "@/components/common/EmptyState";
import { PlantFilterChips, TimelineCard } from "@/components/calendar";
import { tabPanelTransition } from "@/lib/motion";
import type { useCalendarPage } from "@/pages/Calendar/hooks/useCalendarPage";

interface TimelineTabPanelProps {
  timeline: ReturnType<typeof useCalendarPage>["timeline"];
}

export function TimelineTabPanel({ timeline }: TimelineTabPanelProps) {
  const { plants, plantFilterId, setPlantFilterId, activities, filteredActivities, plantLookup } =
    timeline;

  const isFilteredEmpty = plantFilterId && activities.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={tabPanelTransition}
      className="flex flex-col gap-5"
    >
      <PlantFilterChips
        plants={plants}
        selectedPlantId={plantFilterId}
        onSelect={setPlantFilterId}
      />

      {filteredActivities.length > 0 ? (
        <div className="flex flex-col gap-5">
          {filteredActivities.map((activity, index) => {
            const plant = plantLookup[activity.plantId];
            if (!plant) {
              return null;
            }

            return (
              <TimelineCard
                key={activity.id}
                activity={activity}
                plantName={plant.nickname}
                plantImage={plant.image}
                index={index}
              />
            );
          })}
        </div>
      ) : (
        <EmptyState
          title={
            isFilteredEmpty
              ? "이 식물의 기록이 아직 없어요."
              : "아직 함께한 순간이 없어요."
          }
          description={
            isFilteredEmpty
              ? "다른 식물을 선택하거나 오늘의 기록을 남겨볼까요?"
              : "오늘의 작은 기록부터 시작해볼까요?"
          }
          className="rounded-[var(--radius-card)] bg-white/70 py-10"
        />
      )}
    </motion.div>
  );
}
