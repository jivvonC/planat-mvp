import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductActionBarProps {
  liked: boolean;
  onToggleFavorite: () => void;
  onPurchase: () => void;
}

export function ProductActionBar({
  liked,
  onToggleFavorite,
  onPurchase,
}: ProductActionBarProps) {
  return (
    <div
      className="fixed bottom-0 left-1/2 z-20 flex w-full max-w-[var(--width-mobile)] -translate-x-1/2 gap-2 border-t border-white/30 bg-white/90 px-[var(--spacing-screen-x)] py-3 backdrop-blur-sm"
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
    >
      <motion.button
        type="button"
        whileTap={{ scale: 0.96 }}
        onClick={onToggleFavorite}
        className="flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-[var(--radius-button)] border border-planat-primary-light/30 bg-white text-planat-text-primary"
        aria-label={liked ? "찜 해제" : "찜하기"}
        aria-pressed={liked}
      >
        <Heart
          className={cn(
            "h-5 w-5 shrink-0",
            liked ? "fill-planat-primary-light text-planat-primary-light" : "",
          )}
        />
        <span className="text-[length:var(--text-body)] font-medium">찜하기</span>
      </motion.button>

      <Button
        variant="primary"
        className="min-w-0 flex-[1.4]"
        onClick={onPurchase}
      >
        구매하기
      </Button>
    </div>
  );
}
