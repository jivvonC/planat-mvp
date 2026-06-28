export interface Plant {
  id: string;
  nickname: string;
  species: string;
  image: string;
  location: "Indoor" | "Outdoor";
  healthStatus: "Healthy" | "Needs Water" | "Needs Attention";
  wateringCycle: number;
  lastWatered: string;
  nextWatering: string;
  missionId: string;
  recentActivityIds: string[];
  calendarRecordIds: string[];
  diagnosisIds: string[];
  careTipId: string;
  recommendedProductIds: string[];
}
