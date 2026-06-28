import { create } from "zustand";
import type { RecentActivity } from "@/types";

interface ActivityStore {
  activities: RecentActivity[];
  initialized: boolean;
  initialize: (activities: RecentActivity[]) => void;
  addActivity: (activity: RecentActivity) => void;
  getActivitiesForPlant: (plantId: string) => RecentActivity[];
  getRecentActivitiesForPlant: (plantId: string, limit?: number) => RecentActivity[];
}

export const useActivityStore = create<ActivityStore>((set, get) => ({
  activities: [],
  initialized: false,
  initialize: (activities) => set({ activities, initialized: true }),
  addActivity: (activity) =>
    set((state) => ({
      activities: [activity, ...state.activities],
    })),
  getActivitiesForPlant: (plantId) =>
    get().activities.filter((activity) => activity.plantId === plantId),
  getRecentActivitiesForPlant: (plantId, limit = 3) =>
    get()
      .activities.filter((activity) => activity.plantId === plantId)
      .slice(0, limit),
}));
