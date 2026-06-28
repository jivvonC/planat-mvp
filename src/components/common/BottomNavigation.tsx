import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store";
import calendarIcon from "@/assets/icons/navigation/calendar.png";
import myPlantsIcon from "@/assets/icons/navigation/my-plants.png";
import navigation1Background from "@/assets/icons/navigation/navigation1.png";
import navigation2Background from "@/assets/icons/navigation/navigation5.png";
import storeIcon from "@/assets/icons/navigation/store.png";

type TabId = "plants" | "calendar" | "store";

interface NavItem {
  id: TabId;
  label: string;
  to: string;
  icon: string;
  isPrimary?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "calendar", label: "캘린더", to: "/calendar", icon: calendarIcon },
  {
    id: "plants",
    label: "내 식물",
    to: "/plants",
    icon: myPlantsIcon,
    isPrimary: true,
  },
  { id: "store", label: "스토어", to: "/store", icon: storeIcon },
];

const SIDE_ICON_SIZE = "h-10 w-10";
const PRIMARY_ICON_SIZE = "h-[54px] w-[54px]";

export function BottomNavigation() {
  const location = useLocation();
  const setCurrentTab = useUIStore((state) => state.setCurrentTab);
  const isPlantsTab = location.pathname.startsWith("/plants");
  const navigationBackground = isPlantsTab
    ? navigation1Background
    : navigation2Background;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[var(--width-mobile)]"
      aria-label="메인 네비게이션"
    >
      <div className="relative w-full">
        <div
          aria-hidden="true"
          className="h-[76px] w-full bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${navigationBackground})`,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="absolute inset-0 flex items-end px-2 pb-[calc(4px+env(safe-area-inset-bottom))]">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname.startsWith(item.to);

            return (
              <NavLink
                key={item.id}
                to={item.to}
                onClick={() => setCurrentTab(item.id)}
                aria-label={item.isPrimary ? item.label : undefined}
                className={cn(
                  "flex min-h-14 flex-1 flex-col items-center justify-end gap-0 rounded-[var(--radius-button)] transition-colors",
                  item.isPrimary && "-translate-y-7",
                  isActive ? "text-gray-500" : "text-gray-500/80",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <img
                  src={item.icon}
                  alt=""
                  className={cn(
                    "object-contain transition-opacity",
                    item.isPrimary ? PRIMARY_ICON_SIZE : SIDE_ICON_SIZE,
                    isActive ? "opacity-100" : "opacity-80",
                  )}
                />
                {!item.isPrimary ? (
                  <span className="text-[length:var(--text-helper)] font-medium">
                    {item.label}
                  </span>
                ) : null}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
