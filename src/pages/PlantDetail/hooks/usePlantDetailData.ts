import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getCareTipForPlant } from "@/store/initializeStores";
import { useMissionStore } from "@/store/missionStore";
import { isWateredToday, usePlantStore } from "@/store/plantStore";
import { getWeatherForPlant } from "@/utils/weather";

export function usePlantDetailData() {
  const { id = "" } = useParams();

  const plant = usePlantStore((state) =>
    state.plants.find((item) => item.id === id),
  );
  const mission = useMissionStore((state) =>
    state.missions.find((item) => item.plantId === id),
  );

  const careTip = useMemo(() => getCareTipForPlant(id), [id]);
  const weather = useMemo(() => getWeatherForPlant(id), [id]);
  const wateredToday = plant ? isWateredToday(plant) : false;

  return {
    plantId: id,
    plant,
    mission,
    careTip,
    weather,
    wateredToday,
  };
}
