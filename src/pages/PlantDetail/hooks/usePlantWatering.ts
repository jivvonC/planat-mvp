import { useCallback } from "react";
import { useActivityStore } from "@/store/activityStore";
import { useCalendarStore } from "@/store/calendarStore";
import { useNotificationStore } from "@/store/notificationStore";
import { usePlantStore } from "@/store/plantStore";
import { useUIStore } from "@/store/uiStore";
import type { Plant } from "@/types";
import { syncWaterPlant } from "@/utils/careEvents";

export function usePlantWatering(plant: Plant | undefined, wateredToday: boolean) {
  const waterPlant = usePlantStore((state) => state.waterPlant);
  const addRecord = useCalendarStore((state) => state.addRecord);
  const addActivity = useActivityStore((state) => state.addActivity);
  const removeWaterReminders = useNotificationStore(
    (state) => state.removeWaterRemindersForPlant,
  );
  const showToast = useUIStore((state) => state.showToast);

  const handleWater = useCallback(() => {
    if (!plant) {
      return;
    }

    if (wateredToday) {
      showToast("오늘은 이미 물을 줬어요.");
      return;
    }

    syncWaterPlant(
      { waterPlant, addRecord, addActivity, removeWaterReminders },
      plant.id,
    );
    showToast("오늘도 식물과 좋은 시간을 보냈어요.");
  }, [
    plant,
    wateredToday,
    waterPlant,
    addRecord,
    addActivity,
    removeWaterReminders,
    showToast,
  ]);

  return { handleWater };
}
