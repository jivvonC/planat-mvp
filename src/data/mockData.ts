import plantsData from "@/data/plants.json";
import missionsData from "@/data/missions.json";
import notificationsData from "@/data/notifications.json";
import careTipsData from "@/data/careTips.json";
import userData from "@/data/user.json";
import type { CareTip, Mission, Notification, Plant, User } from "@/types";

export const plants = plantsData as Plant[];
export const missions = missionsData as Mission[];
export const notifications = notificationsData as Notification[];
export const careTips = careTipsData as CareTip[];
export const user = userData as User;

export function getPlantsNeedingWater(): Plant[] {
  return plants.filter((plant) => plant.healthStatus === "Needs Water");
}

export function getIncompleteMissions(): Mission[] {
  return missions.filter((mission) => !mission.completed);
}

export function getUnreadNotifications(): Notification[] {
  return notifications.filter((notification) => !notification.isRead);
}

export function getCareTipCount(): number {
  return careTips.length;
}

export function getFirstPlantNeedingWater(): Plant | undefined {
  return getPlantsNeedingWater()[0];
}
