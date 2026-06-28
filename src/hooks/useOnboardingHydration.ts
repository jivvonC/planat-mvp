import { useEffect, useState } from "react";
import { useOnboardingStore } from "@/store/onboardingStore";

export function useOnboardingHydration(): boolean {
  const [hydrated, setHydrated] = useState(
    () => useOnboardingStore.persist.hasHydrated(),
  );

  useEffect(() => {
    if (useOnboardingStore.persist.hasHydrated()) {
      return;
    }

    return useOnboardingStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
  }, []);

  return hydrated;
}
