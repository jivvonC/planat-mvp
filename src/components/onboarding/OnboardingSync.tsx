import { useEffect } from "react";
import { useOnboardingHydration } from "@/hooks/useOnboardingHydration";
import { useOnboardingStore } from "@/store/onboardingStore";
import { useUserStore } from "@/store/userStore";

export function OnboardingSync() {
  const hydrated = useOnboardingHydration();
  const onboardingCompleted = useOnboardingStore(
    (state) => state.onboardingCompleted,
  );
  const userName = useOnboardingStore((state) => state.userName);
  const updateUserName = useUserStore((state) => state.updateUserName);

  useEffect(() => {
    if (hydrated && onboardingCompleted && userName) {
      updateUserName(userName);
    }
  }, [hydrated, onboardingCompleted, updateUserName, userName]);

  return null;
}
