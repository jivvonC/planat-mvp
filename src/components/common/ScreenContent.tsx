import { cn } from "@/lib/utils";
import { LAYOUT_CLASSES } from "@/utils/constants";

interface ScreenContentProps {
  children?: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function ScreenContent({
  children,
  className,
  noPadding = false,
}: ScreenContentProps) {
  return (
    <div
      className={cn(
        LAYOUT_CLASSES.screenStack,
        !noPadding && "px-[var(--spacing-screen-x)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
