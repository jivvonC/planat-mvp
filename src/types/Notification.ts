export type NotificationType =
  | "water"
  | "weather"
  | "mission"
  | "diagnosis"
  | "care-completed"
  | "insight";

export type NotificationTarget =
  | "plant-detail"
  | "calendar"
  | "diagnosis";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  relatedPlantId?: string;
  isRead: boolean;
  createdAt: string;
  navigateTo: NotificationTarget;
}
