import { useCallback, useMemo, useRef, useState } from "react";
import { useActivityStore } from "@/store/activityStore";
import { useCalendarStore, useCalendarUIStore } from "@/store/calendarStore";
import { useNotificationStore } from "@/store/notificationStore";
import { isWateredToday, usePlantStore } from "@/store/plantStore";
import { useUIStore } from "@/store/uiStore";
import {
  recordCareEvent,
  syncWaterPlant,
} from "@/utils/careEvents";
import { sortRecordsByDailyOrder } from "@/utils/calendar";

export function useQuickRecord() {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const plants = usePlantStore((state) => state.plants);
  const quickRecordPlantId = useCalendarUIStore(
    (state) => state.quickRecordPlantId,
  );
  const setQuickRecordPlantId = useCalendarUIStore(
    (state) => state.setQuickRecordPlantId,
  );
  const noteSheetOpen = useCalendarUIStore((state) => state.noteSheetOpen);
  const setNoteSheetOpen = useCalendarUIStore((state) => state.setNoteSheetOpen);

  const waterPlant = usePlantStore((state) => state.waterPlant);
  const addRecord = useCalendarStore((state) => state.addRecord);
  const addActivity = useActivityStore((state) => state.addActivity);
  const removeWaterReminders = useNotificationStore(
    (state) => state.removeWaterRemindersForPlant,
  );
  const showToast = useUIStore((state) => state.showToast);

  const selectedPlant = useMemo(
    () => plants.find((plant) => plant.id === quickRecordPlantId),
    [plants, quickRecordPlantId],
  );

  const recordForPlant = useCallback(
    (input: Parameters<typeof recordCareEvent>[1]) => {
      recordCareEvent({ addRecord, addActivity }, input);
    },
    [addRecord, addActivity],
  );

  const handleWater = useCallback(() => {
    if (!selectedPlant) {
      return;
    }

    if (isWateredToday(selectedPlant)) {
      showToast("오늘은 이미 물을 줬어요.");
      return;
    }

    syncWaterPlant(
      { waterPlant, addRecord, addActivity, removeWaterReminders },
      selectedPlant.id,
    );
    showToast("오늘도 식물과 좋은 시간을 보냈어요.");
  }, [
    selectedPlant,
    waterPlant,
    addRecord,
    addActivity,
    removeWaterReminders,
    showToast,
  ]);

  const handleFertilizer = useCallback(() => {
    if (!selectedPlant) {
      return;
    }

    recordForPlant({
      plantId: selectedPlant.id,
      type: "fertilizer",
      title: "영양제를 주었어요.",
    });
    showToast("영양제를 주었어요.");
  }, [selectedPlant, recordForPlant, showToast]);

  const handlePhotoClick = useCallback(() => {
    photoInputRef.current?.click();
  }, []);

  const handlePhotoSelected = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!selectedPlant || !file) {
        return;
      }

      const photoUrl = URL.createObjectURL(file);
      recordForPlant({
        plantId: selectedPlant.id,
        type: "photo",
        title: "오늘의 모습을 남겼어요.",
        photoUrl,
      });
      showToast("오늘의 모습을 남겼어요.");
      event.target.value = "";
    },
    [selectedPlant, recordForPlant, showToast],
  );

  const handleNoteOpen = useCallback(() => {
    setNoteSheetOpen(true);
  }, [setNoteSheetOpen]);

  const handleNoteClose = useCallback(() => {
    setNoteSheetOpen(false);
  }, [setNoteSheetOpen]);

  const handleNoteSave = useCallback(
    (note: string) => {
      if (!selectedPlant) {
        return;
      }

      recordForPlant({
        plantId: selectedPlant.id,
        type: "note",
        title: note,
      });
      setNoteSheetOpen(false);
      showToast("메모를 남겼어요.");
    },
    [selectedPlant, recordForPlant, setNoteSheetOpen, showToast],
  );

  return {
    plants,
    quickRecordPlantId,
    setQuickRecordPlantId,
    noteSheetOpen,
    photoInputRef,
    handleWater,
    handleFertilizer,
    handlePhotoClick,
    handlePhotoSelected,
    handleNoteOpen,
    handleNoteClose,
    handleNoteSave,
  };
}

export function useCalendarTabData() {
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const selectedDate = useCalendarUIStore((state) => state.selectedDate);
  const setSelectedDate = useCalendarUIStore((state) => state.setSelectedDate);
  const records = useCalendarStore((state) => state.records);

  const today = useMemo(() => new Date(), []);

  const datesWithRecords = useMemo(
    () => new Set(records.map((record) => record.date)),
    [records],
  );

  const eventTypesByDate = useMemo(() => {
    const map: Record<string, ReturnType<typeof sortRecordsByDailyOrder>[number]["type"][]> =
      {};
    for (const record of records) {
      if (!map[record.date]) {
        map[record.date] = [];
      }
      if (!map[record.date].includes(record.type)) {
        map[record.date].push(record.type);
      }
    }
    return map;
  }, [records]);

  const selectedDateRecords = useMemo(
    () =>
      sortRecordsByDailyOrder(
        records.filter((record) => record.date === selectedDate),
      ),
    [records, selectedDate],
  );

  return {
    visibleMonth,
    setVisibleMonth,
    selectedDate,
    setSelectedDate,
    today,
    datesWithRecords,
    eventTypesByDate,
    selectedDateRecords,
  };
}

export function useTimelineFeed() {
  const plantFilterId = useCalendarUIStore((state) => state.plantFilterId);
  const setPlantFilterId = useCalendarUIStore((state) => state.setPlantFilterId);
  const activities = useActivityStore((state) => state.activities);
  const plants = usePlantStore((state) => state.plants);

  const filteredActivities = useMemo(() => {
    const filtered = plantFilterId
      ? activities.filter((activity) => activity.plantId === plantFilterId)
      : activities;

    return [...filtered].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }, [activities, plantFilterId]);

  const plantLookup = useMemo(
    () =>
      Object.fromEntries(
        plants.map((plant) => [plant.id, plant]),
      ),
    [plants],
  );

  return {
    plants,
    plantFilterId,
    setPlantFilterId,
    activities,
    filteredActivities,
    plantLookup,
  };
}

export function useCalendarPage() {
  const activeTab = useCalendarUIStore((state) => state.activeTab);
  const setActiveTab = useCalendarUIStore((state) => state.setActiveTab);

  return {
    activeTab,
    setActiveTab,
    quickRecord: useQuickRecord(),
    calendarTab: useCalendarTabData(),
    timeline: useTimelineFeed(),
  };
}
