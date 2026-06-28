import { Navigate, Outlet } from "react-router-dom";
import { useOnboardingHydration } from "@/hooks/useOnboardingHydration";
import { useOnboardingStore } from "@/store/onboardingStore";

export function RequireOnboarding() {
  const hydrated = useOnboardingHydration();
  const onboardingCompleted = useOnboardingStore(
    (state) => state.onboardingCompleted,
  );

  if (!hydrated) {
    return <div className="min-h-svh bg-planat-gradient-bottom" aria-hidden="true" />;
  }

  if (!onboardingCompleted) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
}

export function OnboardingRoute() {
  const hydrated = useOnboardingHydration();
  const onboardingCompleted = useOnboardingStore(
    (state) => state.onboardingCompleted,
  );

  if (!hydrated) {
    return <div className="min-h-svh bg-planat-gradient-bottom" aria-hidden="true" />;
  }

  if (onboardingCompleted) {
    return <Navigate to="/plants" replace />;
  }

  return <Outlet />;
}
