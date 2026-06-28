export type CareEventType =
  | "watering"
  | "fertilizer"
  | "mission"
  | "observation"
  | "diagnosis"
  | "photo"
  | "note";

export interface CalendarRecord {
  id: string;
  plantId: string;
  type: CareEventType;
  title: string;
  description?: string;
  date: string;
  photoUrl?: string;
}
