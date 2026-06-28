import { useCallback, useState } from "react";
import { useActivityStore } from "@/store/activityStore";
import { useCalendarStore } from "@/store/calendarStore";
import { useMissionStore } from "@/store/missionStore";
import { useUIStore } from "@/store/uiStore";
import type { Mission, Plant } from "@/types";
import {
  createCalendarRecord,
  createRecentActivity,
  getCareEventIcon,
} from "@/utils/careEvents";

export function useMissionSheet(plant: Plant | undefined, mission: Mission | undefined) {
  const [missionSheetOpen, setMissionSheetOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const completeMission = useMissionStore((state) => state.completeMission);
  const addRecord = useCalendarStore((state) => state.addRecord);
  const addActivity = useActivityStore((state) => state.addActivity);
  const showToast = useUIStore((state) => state.showToast);

  const closeMissionSheet = useCallback(() => {
    setMissionSheetOpen(false);
    setSelectedOption(null);
  }, []);

  const openMissionSheet = useCallback(() => {
    if (!mission || mission.completed) {
      return;
    }
    setSelectedOption(null);
    setMissionSheetOpen(true);
  }, [mission]);

  const handleMissionComplete = useCallback(() => {
    if (!plant || !mission || !selectedOption) {
      return;
    }

    completeMission(mission.id);
    addRecord(
      createCalendarRecord({
        plantId: plant.id,
        type: "mission",
        title: `${getCareEventIcon("mission")} 오늘의 미션 완료`,
        description: selectedOption,
      }),
    );
    addActivity(
      createRecentActivity({
        plantId: plant.id,
        type: "mission",
        title: "오늘의 미션 완료",
        description: selectedOption,
      }),
    );
    closeMissionSheet();
    showToast("오늘의 작은 돌봄을 마쳤어요.");
  }, [
    plant,
    mission,
    selectedOption,
    completeMission,
    addRecord,
    addActivity,
    closeMissionSheet,
    showToast,
  ]);

  return {
    missionSheetOpen,
    selectedOption,
    setSelectedOption,
    openMissionSheet,
    closeMissionSheet,
    handleMissionComplete,
  };
}
