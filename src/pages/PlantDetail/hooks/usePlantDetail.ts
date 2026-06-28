import { useMissionSheet } from "./useMissionSheet";
import { usePlantDetailData } from "./usePlantDetailData";
import { usePlantWatering } from "./usePlantWatering";

export function usePlantDetail() {
  const { plant, mission, careTip, weather, wateredToday } = usePlantDetailData();
  const { handleWater } = usePlantWatering(plant, wateredToday);
  const missionSheet = useMissionSheet(plant, mission);

  return {
    plant,
    mission,
    careTip,
    weather,
    wateredToday,
    ...missionSheet,
    handleWater,
  };
}
