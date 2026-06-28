import { EmptyState } from "@/components/common/EmptyState";
import { ScreenContent } from "@/components/common/ScreenContent";
import { NotificationSection, TodayMessage } from "@/components/notifications";
import { ScreenLayout } from "@/layouts/ScreenLayout";
import { useNotifications } from "@/pages/Notification/hooks/useNotifications";

export default function NotificationPage() {
  const {
    todayMessage,
    unreadNotifications,
    earlierGroups,
    hasNotifications,
    plantLookup,
    handleNotificationClick,
  } = useNotifications();

  return (
    <ScreenLayout
      title="알림"
      showBack
      titleClassName="text-[length:var(--text-body)] font-medium"
      className="  bg-gradient-to-b
  from-[#425B62]
  from-0%
  via-[#32A9A9]
  via-60%
  to-[#32A9A9]
  to-100%
  text-white
  font-semibold"
    >
      <ScreenContent className="gap-5 pb-8">
        <TodayMessage
          emoji={todayMessage.emoji}
          message={todayMessage.message}
        />

        {hasNotifications ? (
          <>
            {unreadNotifications.length > 0 ? (
              <NotificationSection
                title="새로운 알림"
                notifications={unreadNotifications}
                plantLookup={plantLookup}
                unread
                onNotificationClick={handleNotificationClick}
              />
            ) : null}

            {earlierGroups.length > 0 ? (
              <section className="flex flex-col gap-4">
                <h2 className="text-[16px] font-semibold text-white">
                  이전 알림
                </h2>
                {earlierGroups.map((group) => (
                  <NotificationSection
                    key={group.date}
                    title=""
                    notifications={group.items}
                    plantLookup={plantLookup}
                    showDateGroups
                    dateLabel={group.date}
                    onNotificationClick={handleNotificationClick}
                  />
                ))}
              </section>
            ) : null}
          </>
        ) : (
          <EmptyState
            title="오늘은 새로운 알림이 없어요."
            description="식물들이 모두 건강하게 지내고 있어요. 🌿"
            className="rounded-[var(--radius-card)] bg-white/85 py-10"
          />
        )}
      </ScreenContent>
    </ScreenLayout>
  );
}
