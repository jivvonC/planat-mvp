import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const ONBOARDING_STEP_COUNT = 7;

export type OnboardingStep =
  | "welcome"
  | "name"
  | "philosophy"
  | "ai-diagnosis"
  | "weather-reminder"
  | "location"
  | "widget";

export const ONBOARDING_STEPS: OnboardingStep[] = [
  "welcome",
  "name",
  "philosophy",
  "ai-diagnosis",
  "weather-reminder",
  "location",
  "widget",
];

interface OnboardingStore {
  userName: string;
  region: string;
  onboardingCompleted: boolean;
  setUserName: (userName: string) => void;
  setRegion: (region: string) => void;
  completeOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      userName: "",
      region: "",
      onboardingCompleted: false,
      setUserName: (userName) => set({ userName }),
      setRegion: (region) => set({ region }),
      completeOnboarding: () => set({ onboardingCompleted: true }),
    }),
    {
      name: "planat-onboarding",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userName: state.userName,
        region: state.region,
        onboardingCompleted: state.onboardingCompleted,
      }),
    },
  ),
);

interface PersistedOnboardingProfile {
  userName: string;
  region: string;
}

export function getPersistedOnboardingProfile(): PersistedOnboardingProfile | null {
  try {
    const raw = localStorage.getItem("planat-onboarding");
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as {
      state?: {
        userName?: string;
        region?: string;
        onboardingCompleted?: boolean;
      };
    };

    if (!parsed.state?.onboardingCompleted || !parsed.state.userName?.trim()) {
      return null;
    }

    return {
      userName: parsed.state.userName.trim(),
      region: parsed.state.region?.trim() ?? "",
    };
  } catch {
    return null;
  }
}
