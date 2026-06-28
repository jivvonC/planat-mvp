import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  liked: boolean;
  onToggle: () => void;
  className?: string;
  size?: "sm" | "md";
}

export function FavoriteButton({
  liked,
  onToggle,
  className,
  size = "md",
}: FavoriteButtonProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const buttonSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.9 }}
      animate={{ scale: liked ? [1, 1.15, 1] : 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-white/80 text-planat-text-primary shadow-[var(--shadow-soft)] transition-colors",
        buttonSize,
        className,
      )}
      aria-label={liked ? "찜 해제" : "찜하기"}
      aria-pressed={liked}
    >
      <Heart
        className={cn(iconSize, liked ? "fill-planat-primary-light text-planat-primary-light" : "")}
      />
    </motion.button>
  );
}
