import { create } from "zustand";
import type { Notification, NotificationType } from "@/types";

interface NotificationStore {
  notifications: Notification[];
  initialized: boolean;
  initialize: (notifications: Notification[]) => void;
  markAsRead: (id: string) => void;
  removeByPlantAndTypes: (plantId: string, types: NotificationType[]) => void;
  removeWaterRemindersForPlant: (plantId: string) => void;
  removeMissionRemindersForPlant: (plantId: string) => void;
  removeDiagnosisRecommendationsForPlant: (plantId: string) => void;
  getUnreadNotifications: () => Notification[];
  getReadNotifications: () => Notification[];
  getUnreadCount: () => number;
}

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  initialized: false,

  initialize: (notifications) => set({ notifications, initialized: true }),

  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification,
      ),
    })),

  removeByPlantAndTypes: (plantId, types) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) =>
          !(
            notification.relatedPlantId === plantId &&
            types.includes(notification.type)
          ),
      ),
    })),

  removeWaterRemindersForPlant: (plantId) => {
    get().removeByPlantAndTypes(plantId, ["water"]);
  },

  removeMissionRemindersForPlant: (plantId) => {
    get().removeByPlantAndTypes(plantId, ["mission"]);
  },

  removeDiagnosisRecommendationsForPlant: (plantId) => {
    get().removeByPlantAndTypes(plantId, ["diagnosis"]);
  },

  getUnreadNotifications: () =>
    get()
      .notifications.filter((notification) => !notification.isRead)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),

  getReadNotifications: () =>
    get()
      .notifications.filter((notification) => notification.isRead)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),

  getUnreadCount: () =>
    get().notifications.filter((notification) => !notification.isRead).length,
}));
