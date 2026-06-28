import { ChevronLeft } from "lucide-react";
import { FavoriteButton } from "@/components/store/FavoriteButton";

interface ProductDetailHeaderProps {
  liked: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
}

export function ProductDetailHeader({
  liked,
  onBack,
  onToggleFavorite,
}: ProductDetailHeaderProps) {
  return (
    <header className="fixed top-0 left-1/2 z-20 flex h-[var(--height-header)] w-full max-w-[var(--width-mobile)] -translate-x-1/2 items-center justify-between px-4 pt-[env(safe-area-inset-top)]">
      <button
        type="button"
        onClick={onBack}
        className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-button)] text-white transition-colors hover:bg-white/20"
        aria-label="뒤로 가기"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div className="flex-1" />

      <FavoriteButton
        liked={liked}
        onToggle={onToggleFavorite}
        className="bg-white/60 shadow-none"
      />
    </header>
  );
}
