import { useActivityStore } from "@/store/activityStore";
import { useOnboardingStore } from "@/store/onboardingStore";
import { usePlantStore } from "@/store/plantStore";
import { useUserStore } from "@/store/userStore";
import { getCareDaysTogether } from "@/utils/careStreak";

export function useStoreHero() {
  const user = useUserStore((state) => state.user);
  const onboardingUserName = useOnboardingStore((state) => state.userName);
  const onboardingCompleted = useOnboardingStore(
    (state) => state.onboardingCompleted,
  );
  const points = useUserStore((state) => state.points);
  const nextRewardPoints = useUserStore((state) => state.nextRewardPoints);
  const plantCount = usePlantStore((state) => state.plants.length);
  const activities = useActivityStore((state) => state.activities);

  const careDays = getCareDaysTogether(user?.careStartedAt, activities);
  const pointsToNextReward = Math.max(0, nextRewardPoints - points);

  return {
    nickname:
      (onboardingCompleted && onboardingUserName.trim()) ||
      user?.name ||
      "식물",
    careDays,
    points,
    pointsToNextReward,
    plantCount,
  };
}
