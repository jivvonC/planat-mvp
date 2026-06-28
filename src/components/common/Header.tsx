import { ChevronLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Text } from "@/components/common/Typography";
import { NotificationBadge } from "@/components/ui/notification-badge";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  greeting?: string;
  showBack?: boolean;
  showNotification?: boolean;
  notificationCount?: number;
  onBack?: () => void;
  titleClassName?: string;
  className?: string;
}

export function Header({
  title,
  greeting,
  showBack = false,
  showNotification = false,
  notificationCount = 0,
  onBack,
  titleClassName,
  className,
}: HeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    navigate(-1);
  };

  if (greeting) {
    return (
      <header
        className={cn(
          "flex h-[var(--height-header)] shrink-0 items-center justify-between gap-3 px-4 pt-[env(safe-area-inset-top)]",
          className,
        )}
      >
        <Text variant="body" as="p" className="flex-1 text-white">
          {greeting}
        </Text>
        {showNotification ? (
          <button
            type="button"
            onClick={() => navigate("/notifications")}
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-button)] text-white transition-colors hover:bg-white/20"
            aria-label="알림"
          >
            <Bell className="h-5 w-5" />
            <NotificationBadge count={notificationCount} />
          </button>
        ) : null}
      </header>
    );
  }

  return (
    <header
      className={cn(
        "flex h-[var(--height-header)] shrink-0 items-center justify-between px-4 pt-[env(safe-area-inset-top)]",
        className,
      )}
    >
      <div className="flex w-11 items-center justify-start">
        {showBack ? (
          <button
            type="button"
            onClick={handleBack}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-button)] text-white transition-colors hover:bg-white/20"
            aria-label="뒤로 가기"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        ) : null}
      </div>

      {title ? (
        <Text
          variant="sectionTitle"
          as="h1"
          className={cn("flex-1 text-center text-white", titleClassName)}
        >
          {title}
        </Text>
      ) : (
        <div className="flex-1" />
      )}

      <div className="flex w-11 items-center justify-end">
        {showNotification ? (
          <button
            type="button"
            onClick={() => navigate("/notifications")}
            className="relative flex h-11 w-11 items-center justify-center rounded-[var(--radius-button)] text-white transition-colors hover:bg-white/20"
            aria-label="알림"
          >
            <Bell className="h-5 w-5" />
            <NotificationBadge count={notificationCount} />
          </button>
        ) : null}
      </div>
    </header>
  );
}
