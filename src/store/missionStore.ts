import { create } from "zustand";
import { useNotificationStore } from "@/store/notificationStore";
import type { Mission } from "@/types";

interface MissionStore {
  missions: Mission[];
  initialized: boolean;
  initialize: (missions: Mission[]) => void;
  getMissionById: (id: string) => Mission | undefined;
  getMissionForPlant: (plantId: string) => Mission | undefined;
  completeMission: (missionId: string) => void;
}

export const useMissionStore = create<MissionStore>((set, get) => ({
  missions: [],
  initialized: false,
  initialize: (missions) => set({ missions, initialized: true }),
  getMissionById: (id) => get().missions.find((mission) => mission.id === id),
  getMissionForPlant: (plantId) =>
    get().missions.find((mission) => mission.plantId === plantId),
  completeMission: (missionId) => {
    const mission = get().missions.find((item) => item.id === missionId);
    set((state) => ({
      missions: state.missions.map((item) =>
        item.id === missionId
          ? {
              ...item,
              completed: true,
              completedAt: new Date().toISOString(),
            }
          : item,
      ),
    }));

    if (mission) {
      useNotificationStore
        .getState()
        .removeMissionRemindersForPlant(mission.plantId);
    }
  },
}));
