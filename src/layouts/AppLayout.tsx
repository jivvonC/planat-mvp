import { Outlet } from "react-router-dom";
import { Toast } from "@/components/common/Toast";
import { OnboardingSync } from "@/components/onboarding/OnboardingSync";
import { MobileContainer } from "@/layouts/MobileContainer";

export default function AppLayout() {
  return (
    <MobileContainer>
      <OnboardingSync />
      <Outlet />
      <Toast />
    </MobileContainer>
  );
}
