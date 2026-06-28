import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo/logo.png";
import { NotificationBadge } from "@/components/ui/notification-badge";

interface PlantsHomeHeaderProps {
  notificationCount: number;
}

export function PlantsHomeHeader({ notificationCount }: PlantsHomeHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="relative z-10 flex h-[var(--height-header)] shrink-0 items-center justify-between px-4 pt-[env(safe-area-inset-top)]">
      <img src={logo} alt="Planat" className="h-4 w-auto object-contain" />
      <button
        type="button"
        onClick={() => navigate("/notifications")}
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-button)] text-white transition-colors hover:bg-white/20"
        aria-label="알림"
      >
        <Bell className="h-5 w-5" />
        <NotificationBadge count={notificationCount} />
      </button>
    </header>
  );
}
