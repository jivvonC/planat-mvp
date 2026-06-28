import type { CareEventType } from "./CalendarRecord";

export interface RecentActivity {
  id: string;
  plantId: string;
  type: CareEventType;
  title: string;
  description?: string;
  date: string;
  createdAt: string;
  photoUrl?: string;
}
