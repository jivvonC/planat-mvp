import type { CalendarRecord, CareEventType, RecentActivity } from "@/types";

export const CARE_EVENT_ICONS: Record<CareEventType, string> = {
  watering: "💧",
  fertilizer: "🌱",
  mission: "✔️",
  observation: "🌱",
  diagnosis: "🤖",
  photo: "📷",
  note: "📝",
};

export const DAILY_RECORD_ORDER: CareEventType[] = [
  "watering",
  "fertilizer",
  "mission",
  "photo",
  "note",
  "observation",
  "diagnosis",
];

export function getCareEventIcon(type: CareEventType): string {
  return CARE_EVENT_ICONS[type];
}

export function getTodayDateString(): string {
  return new Date().toISOString().split("T")[0] ?? "";
}

interface CareEventInput {
  plantId: string;
  type: CareEventType;
  title: string;
  description?: string;
  photoUrl?: string;
  date?: string;
}

export function createCalendarRecord({
  plantId,
  type,
  title,
  description,
  photoUrl,
  date = getTodayDateString(),
}: CareEventInput): CalendarRecord {
  return {
    id: `calendar-${crypto.randomUUID()}`,
    plantId,
    type,
    title,
    description,
    date,
    photoUrl,
  };
}

export function createRecentActivity({
  plantId,
  type,
  title,
  description,
  photoUrl,
  date = getTodayDateString(),
}: CareEventInput): RecentActivity {
  return {
    id: `activity-${crypto.randomUUID()}`,
    plantId,
    type,
    title,
    description,
    date,
    createdAt: new Date().toISOString(),
    photoUrl,
  };
}

interface RecordCareEventDeps {
  addRecord: (record: CalendarRecord) => void;
  addActivity: (activity: RecentActivity) => void;
}

export function recordCareEvent(
  deps: RecordCareEventDeps,
  input: CareEventInput,
): void {
  deps.addRecord(createCalendarRecord(input));
  deps.addActivity(createRecentActivity(input));
}

interface SyncWaterPlantDeps extends RecordCareEventDeps {
  waterPlant: (plantId: string) => void;
  removeWaterReminders: (plantId: string) => void;
}

export function syncWaterPlant(
  deps: SyncWaterPlantDeps,
  plantId: string,
): void {
  deps.waterPlant(plantId);
  recordCareEvent(deps, {
    plantId,
    type: "watering",
    title: `${getCareEventIcon("watering")} 물을 주었어요.`,
  });
  deps.removeWaterReminders(plantId);
}
