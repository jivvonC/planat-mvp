import { useMemo } from "react";
import { careTips } from "@/data/mockData";
import { useMissionStore } from "@/store/missionStore";
import { useNotificationStore } from "@/store/notificationStore";
import { isWateredToday, usePlantStore } from "@/store/plantStore";
import type { Plant } from "@/types";

export interface HomeSummaryItem {
  id: string;
  emoji: string;
  title: string;
  count: number;
  to: string;
}

function getPlantsNeedingWater(plants: Plant[]): Plant[] {
  return plants.filter(
    (plant) => plant.healthStatus === "Needs Water" && !isWateredToday(plant),
  );
}

export function useHomeSummary() {
  const plants = usePlantStore((state) => state.plants);
  const missions = useMissionStore((state) => state.missions);
  const unreadCount = useNotificationStore(
    (state) => state.notifications.filter((notification) => !notification.isRead).length,
  );

  const summaryItems = useMemo<HomeSummaryItem[]>(() => {
    const waterPlants = getPlantsNeedingWater(plants);
    const firstWaterPlant = waterPlants[0];
    const incompleteMissions = missions.filter((mission) => !mission.completed);
    const firstIncompleteMission = incompleteMissions[0];
    const items: HomeSummaryItem[] = [];

    if (waterPlants.length > 0 && firstWaterPlant) {
      items.push({
        id: "water",
        emoji: "💧",
        title: "오늘 물을 줘야 하는 식물",
        count: waterPlants.length,
        to: `/plants/${firstWaterPlant.id}`,
      });
    }

    if (incompleteMissions.length > 0 && firstIncompleteMission) {
      items.push({
        id: "mission",
        emoji: "🌱",
        title: "오늘의 미션",
        count: incompleteMissions.length,
        to: `/plants/${firstIncompleteMission.plantId}`,
      });
    }

    if (careTips.length > 0) {
      const priorityTipCount = careTips.filter((tip) => {
        const plant = plants.find((item) => item.id === tip.plantId);
        return plant && plant.healthStatus !== "Healthy";
      }).length;

      if (priorityTipCount > 0) {
        items.push({
          id: "care-tip",
          emoji: "☀️",
          title: "새로운 관리 팁",
          count: priorityTipCount,
          to: "/notifications",
        });
      }
    }

    return items.slice(0, 3);
  }, [plants, missions]);

  return {
    plants,
    summaryItems,
    unreadCount,
  };
}
