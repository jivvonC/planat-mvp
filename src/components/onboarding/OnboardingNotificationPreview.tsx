import { motion } from "framer-motion";
import { PlantImage } from "@/components/common/PlantImage";
import { Text } from "@/components/common/Typography";
import { cn } from "@/lib/utils";
import type { NotificationType } from "@/types";
import { getPlantImage } from "@/utils/plantAssets";
import { getNotificationIcon } from "@/utils/notifications";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

const PREVIEW_NOTIFICATIONS: {
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  plantImage?: string;
  plantName?: string;
}[] = [
  {
    type: "water",
    title: "물을 줄 시간이 되었어요",
    message: "몬이가 오늘 물을 기다리고 있어요.",
    time: "07:30",
    plantImage: "monstera.png",
    plantName: "몬이",
  },
  {
    type: "weather",
    title: "오늘 오후에는 비가 올 예정이에요",
    message: "베란다에 있는 알리를 잠시 안으로 들여볼까요?",
    time: "08:00",
    plantImage: "aloe-vera.png",
    plantName: "알리",
  },
  {
    type: "insight",
    title: "몬이가 새 잎을 틔울 준비를 하고 있어요",
    message: "오늘은 햇빛을 조금 더 받아보면 좋겠어요.",
    time: "09:00",
    plantImage: "monstera.png",
    plantName: "몬이",
  },
];

interface OnboardingNotificationPreviewProps {
  className?: string;
}

interface PreviewNotificationItemProps {
  notification: (typeof PREVIEW_NOTIFICATIONS)[number];
  index: number;
}

function PreviewNotificationItem({
  notification,
  index,
}: PreviewNotificationItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.55,
        delay: 0.45 + index * 0.42,
        ease: REVEAL_EASE,
      }}
      className="flex w-full items-start gap-3 rounded-[var(--radius-card)] bg-white/70 p-3 shadow-[var(--shadow-card)]"
    >
      {notification.plantImage ? (
        <PlantImage
          src={getPlantImage(notification.plantImage)}
          alt={notification.plantName ?? ""}
          size="sm"
          className="h-14 w-14 shrink-0 self-center rounded-full object-cover"
        />
      ) : (
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full bg-planat-bg-neutral text-xl"
          aria-hidden="true"
        >
          {getNotificationIcon(notification.type)}
        </span>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <Text variant="caption" className="line-clamp-1 font-semibold">
            <span className="mr-1" aria-hidden="true">
              {getNotificationIcon(notification.type)}
            </span>
            {notification.title}
          </Text>
          <span
            className="mt-1 h-2 w-2 shrink-0 rounded-full bg-planat-primary-light"
            aria-hidden="true"
          />
        </div>
        <Text
          variant="helper"
          muted
          className="mt-0.5 line-clamp-2 font-medium text-[12px] text-planat-text-primary/60"
        >
          {notification.message}
        </Text>
        <Text
          variant="helper"
          muted
          className="mt-1 font-medium text-[12px] text-planat-text-primary/60"
        >
          {notification.time}
        </Text>
      </div>
    </motion.div>
  );
}

export function OnboardingNotificationPreview({
  className,
}: OnboardingNotificationPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("flex w-full max-w-[320px] flex-col gap-2", className)}
      aria-hidden="true"
    >
      {PREVIEW_NOTIFICATIONS.map((notification, index) => (
        <PreviewNotificationItem
          key={notification.type}
          notification={notification}
          index={index}
        />
      ))}
    </motion.div>
  );
}
