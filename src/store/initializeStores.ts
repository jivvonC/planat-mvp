import calendarData from "@/data/calendar.json";
import diagnosisFlowsData from "@/data/diagnosisFlows.json";
import diagnosisHistoryData from "@/data/diagnosis.json";
import productsData from "@/data/products.json";
import { careTips, missions, notifications, plants, user } from "@/data/mockData";
import { useActivityStore } from "@/store/activityStore";
import { useCalendarStore } from "@/store/calendarStore";
import { useDiagnosisStore } from "@/store/diagnosisStore";
import { useMissionStore } from "@/store/missionStore";
import { useNotificationStore } from "@/store/notificationStore";
import { usePlantStore } from "@/store/plantStore";
import { useProductStore } from "@/store/productStore";
import { getPersistedOnboardingProfile } from "@/store/onboardingStore";
import { useUserStore } from "@/store/userStore";
import type { CalendarRecord, DiagnosisFlow, DiagnosisHistory, RecentActivity } from "@/types";
import type { StoreProduct } from "@/types/StoreProduct";

function mapRecordToActivity(record: CalendarRecord): RecentActivity {
  return {
    id: record.id.replace("calendar-", "activity-"),
    plantId: record.plantId,
    type: record.type,
    title: record.title,
    description: record.description,
    date: record.date,
    createdAt: `${record.date}T10:00:00`,
    photoUrl: record.photoUrl,
  };
}

export function initializeStores(): void {
  const plantStore = usePlantStore.getState();
  const missionStore = useMissionStore.getState();
  const calendarStore = useCalendarStore.getState();
  const notificationStore = useNotificationStore.getState();
  const activityStore = useActivityStore.getState();
  const diagnosisStore = useDiagnosisStore.getState();
  const productStore = useProductStore.getState();
  const userStore = useUserStore.getState();

  if (!plantStore.initialized) {
    plantStore.initialize(plants);
  }
  if (!missionStore.initialized) {
    missionStore.initialize(missions);
  }
  if (!calendarStore.initialized) {
    calendarStore.initialize(calendarData as CalendarRecord[]);
  }
  if (!notificationStore.initialized) {
    notificationStore.initialize(notifications);
  }
  if (!activityStore.initialized) {
    const records = calendarData as CalendarRecord[];
    activityStore.initialize(records.map(mapRecordToActivity));
  }
  if (!diagnosisStore.initialized) {
    diagnosisStore.initialize(
      diagnosisFlowsData as DiagnosisFlow[],
      diagnosisHistoryData as DiagnosisHistory[],
    );
  }
  if (!productStore.initialized) {
    productStore.initialize(productsData as StoreProduct[]);
  }
  if (!userStore.initialized) {
    const onboardingProfile = getPersistedOnboardingProfile();
    userStore.initialize(
      onboardingProfile
        ? { ...user, name: onboardingProfile.userName }
        : user,
      { points: 320, nextRewardPoints: 500 },
    );
  }
}

export function getCareTipForPlant(plantId: string) {
  const plant = usePlantStore.getState().getPlantById(plantId);
  if (!plant) {
    return undefined;
  }
  return careTips.find((tip) => tip.id === plant.careTipId);
}
