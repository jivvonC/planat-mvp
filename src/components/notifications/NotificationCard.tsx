import { motion } from "framer-motion";
import { PlantImage } from "@/components/common/PlantImage";
import { Text } from "@/components/common/Typography";
import { cn } from "@/lib/utils";
import type { Notification } from "@/types";
import { getPlantImage } from "@/utils/plantAssets";
import {
  formatNotificationTime,
  getNotificationIcon,
} from "@/utils/notifications";

interface NotificationCardProps {
  notification: Notification;
  plantImage?: string;
  plantName?: string;
  unread?: boolean;
  index?: number;
  onClick: () => void;
}

export function NotificationCard({
  notification,
  plantImage,
  plantName,
  unread = false,
  index = 0,
  onClick,
}: NotificationCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "flex w-full min-h-11 items-start gap-3 rounded-[var(--radius-card)] p-3 text-left transition-[box-shadow,background-color] duration-200",
        unread
          ? "bg-white/70 shadow-[var(--shadow-card)]"
          : "bg-white/40 shadow-[var(--shadow-soft)]",
      )}
    >
      {plantImage ? (
        <PlantImage
          src={getPlantImage(plantImage)}
          alt={plantName ?? ""}
          size="sm"
          className="h-14 w-14 shrink-0 self-center rounded-full object-cover"
        />
      ) : (
        <span
          className="flex h-11 w-11 shrink-0 self-center items-center justify-center rounded-full bg-planat-bg-neutral text-xl"
          aria-hidden="true"
        >
          {getNotificationIcon(notification.type)}
        </span>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <Text variant="caption" className="line-clamp-1 font-semibold ">
            <span className="mr-1" aria-hidden="true">
              {getNotificationIcon(notification.type)}
            </span>
            {notification.title}
          </Text>
          {unread ? (
            <span
              className="mt-1 h-2 w-2 shrink-0 rounded-full bg-planat-primary-light"
              aria-label="읽지 않음"
            />
          ) : null}
        </div>
        <Text
          variant="helper"
          muted
          className="mt-0.5 line-clamp-2 text-planat-text-primary/60 font-medium text-[12px]"
        >
          {notification.message}
        </Text>
        <Text
          variant="helper"
          muted
          className="mt-1 text-planat-text-primary/60 font-medium text-[12px]"
        >
          {formatNotificationTime(notification.createdAt)}
        </Text>
      </div>
    </motion.button>
  );
}
