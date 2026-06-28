import { Outlet } from "react-router-dom";
import { BottomNavigation } from "@/components/common/BottomNavigation";

export function MainTabLayout() {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}
