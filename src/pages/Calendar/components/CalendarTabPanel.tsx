import { motion } from "framer-motion";
import {
  CalendarGrid,
  CalendarNoteSheet,
  DailyRecordSummary,
  QuickRecordHero,
} from "@/components/calendar";
import { tabPanelTransition } from "@/lib/motion";
import type { useCalendarPage } from "@/pages/Calendar/hooks/useCalendarPage";

interface CalendarTabPanelProps {
  quickRecord: ReturnType<typeof useCalendarPage>["quickRecord"];
  calendarTab: ReturnType<typeof useCalendarPage>["calendarTab"];
}

export function CalendarTabPanel({
  quickRecord,
  calendarTab,
}: CalendarTabPanelProps) {
  const {
    plants,
    quickRecordPlantId,
    setQuickRecordPlantId,
    noteSheetOpen,
    photoInputRef,
    handleWater,
    handleFertilizer,
    handlePhotoClick,
    handlePhotoSelected,
    handleNoteOpen,
    handleNoteClose,
    handleNoteSave,
  } = quickRecord;

  const {
    visibleMonth,
    setVisibleMonth,
    selectedDate,
    setSelectedDate,
    today,
    datesWithRecords,
    eventTypesByDate,
    selectedDateRecords,
  } = calendarTab;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={tabPanelTransition}
        className="flex flex-col gap-4"
      >
        <QuickRecordHero
          plants={plants}
          selectedPlantId={quickRecordPlantId}
          onSelectPlant={setQuickRecordPlantId}
          onWater={handleWater}
          onFertilizer={handleFertilizer}
          onPhoto={handlePhotoClick}
          onNote={handleNoteOpen}
        />

        <CalendarGrid
          month={visibleMonth}
          selectedDate={selectedDate}
          today={today}
          datesWithRecords={datesWithRecords}
          eventTypesByDate={eventTypesByDate}
          onMonthChange={setVisibleMonth}
          onSelectDate={setSelectedDate}
        />

        <DailyRecordSummary
          selectedDate={selectedDate}
          records={selectedDateRecords}
        />
      </motion.div>

      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoSelected}
      />

      <CalendarNoteSheet
        open={noteSheetOpen}
        onClose={handleNoteClose}
        onSave={handleNoteSave}
      />
    </>
  );
}
