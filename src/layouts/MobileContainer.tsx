import { cn } from "@/lib/utils";

interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileContainer({ children, className }: MobileContainerProps) {
  return (
    <div className="flex min-h-svh justify-center">
      <div
        className={cn(
          "relative flex min-h-svh w-full max-w-[var(--width-mobile)] flex-col bg-gradient-to-b from-planat-gradient-top to-planat-gradient-bottom",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
