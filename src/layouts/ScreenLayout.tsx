import { Header } from "@/components/common/Header";
import { cn } from "@/lib/utils";

interface ScreenLayoutProps {
  title?: string;
  greeting?: string;
  showBack?: boolean;
  showNotification?: boolean;
  notificationCount?: number;
  onBack?: () => void;
  titleClassName?: string;
  header?: React.ReactNode;
  background?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  withBottomNav?: boolean;
}

export function ScreenLayout({
  title,
  greeting,
  showBack = false,
  showNotification = false,
  notificationCount = 0,
  onBack,
  titleClassName,
  header,
  background,
  children,
  className,
  contentClassName,
  withBottomNav = false,
}: ScreenLayoutProps) {
  return (
    <div className={cn("relative flex min-h-svh flex-col", className)}>
      {background}
      {header ?? (
        <Header
          title={title}
          greeting={greeting}
          showBack={showBack}
          showNotification={showNotification}
          notificationCount={notificationCount}
          onBack={onBack}
          titleClassName={titleClassName}
          className="relative z-10"
        />
      )}
      <main
        className={cn(
          "relative z-10 flex flex-1 flex-col overflow-y-auto",
          withBottomNav &&
            "pb-[calc(var(--height-bottom-nav)+env(safe-area-inset-bottom))]",
          contentClassName,
        )}
      >
        {children}
      </main>
    </div>
  );
}
