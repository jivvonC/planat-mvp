import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useNotificationStore } from "@/store/notificationStore";
import { usePlantStore } from "@/store/plantStore";
import type { Notification } from "@/types";
import {
  getNotificationPath,
  getTodayMessage,
  groupNotificationsByDate,
  MAX_UNREAD_NOTIFICATIONS,
} from "@/utils/notifications";

export function useNotifications() {
  const navigate = useNavigate();
  const notifications = useNotificationStore((state) => state.notifications);
  const markAsRead = useNotificationStore((state) => state.markAsRead);
  const plants = usePlantStore((state) => state.plants);

  const plantLookup = useMemo(
    () =>
      Object.fromEntries(
        plants.map((plant) => [
          plant.id,
          { image: plant.image, nickname: plant.nickname },
        ]),
      ),
    [plants],
  );

  const unreadNotifications = useMemo(
    () =>
      notifications
        .filter((notification) => !notification.isRead)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .slice(0, MAX_UNREAD_NOTIFICATIONS),
    [notifications],
  );

  const readNotifications = useMemo(
    () =>
      notifications
        .filter((notification) => notification.isRead)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
    [notifications],
  );

  const earlierGroups = useMemo(
    () => groupNotificationsByDate(readNotifications),
    [readNotifications],
  );

  const todayMessage = useMemo(
    () => getTodayMessage(notifications),
    [notifications],
  );

  const hasNotifications = notifications.length > 0;

  const handleNotificationClick = useCallback(
    (notification: Notification) => {
      if (!notification.isRead) {
        markAsRead(notification.id);
      }
      navigate(getNotificationPath(notification));
    },
    [markAsRead, navigate],
  );

  return {
    todayMessage,
    unreadNotifications,
    earlierGroups,
    hasNotifications,
    plantLookup,
    handleNotificationClick,
  };
}
