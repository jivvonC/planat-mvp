import { create } from "zustand";
import type { CalendarRecord, CareEventType } from "@/types";

export type CalendarTab = "calendar" | "timeline";

interface CalendarUIStore {
  activeTab: CalendarTab;
  selectedDate: string;
  plantFilterId: string | null;
  quickRecordPlantId: string;
  noteSheetOpen: boolean;
  setActiveTab: (tab: CalendarTab) => void;
  setSelectedDate: (date: string) => void;
  setPlantFilterId: (plantId: string | null) => void;
  setQuickRecordPlantId: (plantId: string) => void;
  setNoteSheetOpen: (open: boolean) => void;
}

interface CalendarStore {
  records: CalendarRecord[];
  initialized: boolean;
  initialize: (records: CalendarRecord[]) => void;
  addRecord: (record: CalendarRecord) => void;
  getRecordsForPlant: (plantId: string) => CalendarRecord[];
  getRecordsByDate: (date: string, plantId?: string) => CalendarRecord[];
  getDatesWithRecords: () => string[];
  getEventTypesByDate: (date: string) => CareEventType[];
}

export const useCalendarUIStore = create<CalendarUIStore>((set) => ({
  activeTab: "calendar",
  selectedDate: new Date().toISOString().split("T")[0] ?? "",
  plantFilterId: null,
  quickRecordPlantId: "plant-01",
  noteSheetOpen: false,
  setActiveTab: (activeTab) => set({ activeTab }),
  setSelectedDate: (selectedDate) => set({ selectedDate }),
  setPlantFilterId: (plantFilterId) => set({ plantFilterId }),
  setQuickRecordPlantId: (quickRecordPlantId) => set({ quickRecordPlantId }),
  setNoteSheetOpen: (noteSheetOpen) => set({ noteSheetOpen }),
}));

export const useCalendarStore = create<CalendarStore>((set, get) => ({
  records: [],
  initialized: false,
  initialize: (records) => set({ records, initialized: true }),
  addRecord: (record) =>
    set((state) => ({
      records: [record, ...state.records],
    })),
  getRecordsForPlant: (plantId) =>
    get().records.filter((record) => record.plantId === plantId),
  getRecordsByDate: (date, plantId) =>
    get().records.filter(
      (record) =>
        record.date === date && (plantId ? record.plantId === plantId : true),
    ),
  getDatesWithRecords: () => {
    const dates = new Set(get().records.map((record) => record.date));
    return Array.from(dates);
  },
  getEventTypesByDate: (date) => {
    const types = new Set<CareEventType>();
    for (const record of get().records) {
      if (record.date === date) {
        types.add(record.type);
      }
    }
    return Array.from(types);
  },
}));
