import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NotificationBadgeProps {
  count: number;
  className?: string;
}

export function NotificationBadge({
  count,
  className,
}: NotificationBadgeProps) {
  if (count <= 0) {
    return null;
  }

  const label = count > 9 ? "9+" : String(count);

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-planat-orange px-1 text-[10px] font-semibold text-white",
        className,
      )}
      aria-label={`읽지 않은 알림 ${count}개`}
    >
      {label}
    </motion.span>
  );
}
