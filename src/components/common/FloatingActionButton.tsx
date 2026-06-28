import { motion } from "framer-motion";
import starIcon from "@/assets/images/illustrations/staricon.png";
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export function FloatingActionButton({
  label,
  onClick,
  className,
}: FloatingActionButtonProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      onClick={onClick}
      className={cn(
        "fixed right-4 bottom-6 z-40 flex min-h-14 min-w-14 flex-col items-center justify-center gap-1 rounded-full bg-planat-bg-neutral/80 px-3 py-2.5 text-white shadow-[var(--shadow-card)]",
        className,
      )}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      aria-label={label}
    >
      <img
        src={starIcon}
        alt=""
        className="h-5 w-5 shrink-0 object-contain"
        aria-hidden="true"
      />
      <span className="text-[length:var(--text-helper)] font-semibold leading-tight text-accent-foreground">
        {label}
      </span>
    </motion.button>
  );
}
