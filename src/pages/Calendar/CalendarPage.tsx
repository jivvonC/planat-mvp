import { AnimatePresence } from "framer-motion";
import { ScreenContent } from "@/components/common/ScreenContent";
import { CalendarSegmentedTab } from "@/components/calendar";
import { ScreenLayout } from "@/layouts/ScreenLayout";
import { CalendarHomeHeader } from "@/pages/Calendar/components/CalendarHomeHeader";
import { CalendarTabPanel } from "@/pages/Calendar/components/CalendarTabPanel";
import { TimelineTabPanel } from "@/pages/Calendar/components/TimelineTabPanel";
import { useCalendarPage } from "@/pages/Calendar/hooks/useCalendarPage";
import { useNotificationStore } from "@/store/notificationStore";

export default function CalendarPage() {
  const { activeTab, setActiveTab, quickRecord, calendarTab, timeline } =
    useCalendarPage();
  const unreadCount = useNotificationStore(
    (state) =>
      state.notifications.filter((notification) => !notification.isRead).length,
  );

  return (
    <ScreenLayout
      header={<CalendarHomeHeader notificationCount={unreadCount} />}
      withBottomNav
      className="bg-gradient-to-b
  from-[#32A9A9]
  from-0%
  via-[#425B62]
  via-60%
  to-[#425B62]
  to-100%"
    >
      <ScreenContent className="gap-4 pb-6 pt-2">
        <CalendarSegmentedTab
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <AnimatePresence mode="wait">
          {activeTab === "calendar" ? (
            <CalendarTabPanel
              key="calendar"
              quickRecord={quickRecord}
              calendarTab={calendarTab}
            />
          ) : (
            <TimelineTabPanel key="timeline" timeline={timeline} />
          )}
        </AnimatePresence>
      </ScreenContent>
    </ScreenLayout>
  );
}
