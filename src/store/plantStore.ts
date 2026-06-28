import { create } from "zustand";
import type { Plant } from "@/types";

function todayISO(): string {
  return new Date().toISOString().split("T")[0] ?? "";
}

export function isWateredToday(plant: Plant): boolean {
  return plant.lastWatered === todayISO();
}

interface PlantStore {
  plants: Plant[];
  initialized: boolean;
  initialize: (plants: Plant[]) => void;
  getPlantById: (id: string) => Plant | undefined;
  waterPlant: (plantId: string) => void;
  applyDiagnosis: (plantId: string, diagnosisId: string) => void;
}

export const usePlantStore = create<PlantStore>((set, get) => ({
  plants: [],
  initialized: false,
  initialize: (plants) => set({ plants, initialized: true }),
  getPlantById: (id) => get().plants.find((plant) => plant.id === id),
  waterPlant: (plantId) =>
    set((state) => ({
      plants: state.plants.map((plant) => {
        if (plant.id !== plantId) {
          return plant;
        }

        return {
          ...plant,
          lastWatered: todayISO(),
          nextWatering:
            new Date(Date.now() + plant.wateringCycle * 86400000)
              .toISOString()
              .split("T")[0] ?? plant.nextWatering,
          healthStatus:
            plant.healthStatus === "Needs Water"
              ? "Healthy"
              : plant.healthStatus,
        };
      }),
    })),
  applyDiagnosis: (plantId, diagnosisId) =>
    set((state) => ({
      plants: state.plants.map((plant) => {
        if (plant.id !== plantId) {
          return plant;
        }

        return {
          ...plant,
          diagnosisIds: [diagnosisId, ...plant.diagnosisIds],
          healthStatus:
            plant.healthStatus === "Needs Attention"
              ? "Healthy"
              : plant.healthStatus,
        };
      }),
    })),
}));
