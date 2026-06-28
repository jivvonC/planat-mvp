import { create } from "zustand";
import type { User } from "@/types";

interface UserStore {
  user: User | null;
  points: number;
  nextRewardPoints: number;
  initialized: boolean;
  initialize: (
    user: User,
    options?: { points?: number; nextRewardPoints?: number },
  ) => void;
  updateUserName: (name: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  points: 0,
  nextRewardPoints: 500,
  initialized: false,
  initialize: (user, options) =>
    set({
      user,
      points: options?.points ?? 320,
      nextRewardPoints: options?.nextRewardPoints ?? 500,
      initialized: true,
    }),
  updateUserName: (name) =>
    set((state) => ({
      user: state.user ? { ...state.user, name } : state.user,
    })),
}));
