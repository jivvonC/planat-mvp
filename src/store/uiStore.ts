import { create } from "zustand";
import type { BottomSheetState, NavigationState, Toast } from "@/types";

export const TOAST_DURATION_MS = 2800;

interface UIStore {
  navigation: NavigationState;
  toast: Toast | null;
  bottomSheet: BottomSheetState;
  setCurrentTab: (tab: NavigationState["currentTab"]) => void;
  showToast: (message: string) => void;
  hideToast: () => void;
  openBottomSheet: (type: BottomSheetState["type"]) => void;
  closeBottomSheet: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  navigation: { currentTab: "plants" },
  toast: null,
  bottomSheet: { open: false, type: "mission" },
  setCurrentTab: (currentTab) =>
    set((state) => ({
      navigation: { ...state.navigation, currentTab },
    })),
  showToast: (message) =>
    set({
      toast: {
        id: crypto.randomUUID(),
        message,
        visible: true,
      },
    }),
  hideToast: () => set({ toast: null }),
  openBottomSheet: (type) =>
    set({
      bottomSheet: { open: true, type },
    }),
  closeBottomSheet: () =>
    set((state) => ({
      bottomSheet: { ...state.bottomSheet, open: false },
    })),
}));
