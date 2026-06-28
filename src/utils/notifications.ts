import type { Notification, NotificationType } from "@/types";

export const NOTIFICATION_ICONS: Record<NotificationType, string> = {
  water: "💧",
  weather: "🌧",
  mission: "🌱",
  diagnosis: "🤖",
  "care-completed": "✨",
  insight: "🌿",
};

export function getNotificationIcon(type: NotificationType): string {
  return NOTIFICATION_ICONS[type];
}

export function getNotificationPath(notification: Notification): string {
  const plantId = notification.relatedPlantId;

  switch (notification.navigateTo) {
    case "plant-detail":
      return plantId ? `/plants/${plantId}` : "/plants";
    case "calendar":
      return "/calendar";
    case "diagnosis":
      return plantId ? `/plants/${plantId}/diagnosis` : "/plants";
    default:
      return "/plants";
  }
}

export function formatNotificationTime(createdAt: string): string {
  const date = new Date(createdAt);
  const now = new Date();
  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (isToday) {
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  return date.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
}

export function formatNotificationGroupDate(createdAt: string): string {
  const date = new Date(createdAt);
  const now = new Date();
  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (isToday) {
    return "오늘";
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday =
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate();

  if (isYesterday) {
    return "어제";
  }

  return date.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
}

interface TodayMessage {
  emoji: string;
  message: string;
}

export function getTodayMessage(notifications: Notification[]): TodayMessage {
  const unread = notifications.filter((notification) => !notification.isRead);

  if (unread.some((notification) => notification.type === "water")) {
    return {
      emoji: "💧",
      message: "오늘도 작은 돌봄이 기다리고 있어요.",
    };
  }

  if (unread.some((notification) => notification.type === "weather")) {
    return {
      emoji: "☀️",
      message: "햇살이 좋은 날이에요. 식물과 잠깐 시간을 내볼까요?",
    };
  }

  if (unread.length > 0) {
    return {
      emoji: "🌿",
      message: "오늘 식물이 전하고 싶은 이야기가 있어요.",
    };
  }

  return {
    emoji: "🍃",
    message: "식물들은 오늘도 천천히 자라고 있어요.",
  };
}

export function groupNotificationsByDate(
  notifications: Notification[],
): { date: string; items: Notification[] }[] {
  const groups = new Map<string, Notification[]>();

  for (const notification of notifications) {
    const date = formatNotificationGroupDate(notification.createdAt);
    const existing = groups.get(date) ?? [];
    existing.push(notification);
    groups.set(date, existing);
  }

  return Array.from(groups.entries()).map(([date, items]) => ({
    date,
    items: items.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ),
  }));
}

export const MAX_UNREAD_NOTIFICATIONS = 3;
