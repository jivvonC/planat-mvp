import { Text } from "@/components/common/Typography";
import type { Notification } from "@/types";
import { NotificationCard } from "./NotificationCard";

interface NotificationSectionProps {
  title: string;
  notifications: Notification[];
  plantLookup: Record<string, { image: string; nickname: string }>;
  unread?: boolean;
  showDateGroups?: boolean;
  dateLabel?: string;
  onNotificationClick: (notification: Notification) => void;
}

export function NotificationSection({
  title,
  notifications,
  plantLookup,
  unread = false,
  showDateGroups = false,
  dateLabel,
  onNotificationClick,
}: NotificationSectionProps) {
  if (notifications.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      {showDateGroups && dateLabel ? (
        <Text variant="caption" className="font-medium text-white">
          {dateLabel}
        </Text>
      ) : title ? (
        <Text
          variant="sectionTitle"
          as="h2"
          className="text-[16px] font-semibold text-white"
        >
          {title}
        </Text>
      ) : null}

      <div className="flex flex-col gap-2">
        {notifications.map((notification, index) => {
          const plant = notification.relatedPlantId
            ? plantLookup[notification.relatedPlantId]
            : undefined;

          return (
            <NotificationCard
              key={notification.id}
              notification={notification}
              plantImage={plant?.image}
              plantName={plant?.nickname}
              unread={unread}
              index={index}
              onClick={() => onNotificationClick(notification)}
            />
          );
        })}
      </div>
    </section>
  );
}
