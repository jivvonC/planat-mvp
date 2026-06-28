export interface NavigationState {
  currentTab: "plants" | "calendar" | "store";
}

export interface Toast {
  id: string;
  message: string;
  visible: boolean;
}

export interface BottomSheetState {
  open: boolean;
  type: "mission" | "observation" | "photo";
}
