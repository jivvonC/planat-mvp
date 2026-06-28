import { useCallback } from "react";
import { useProductStore } from "@/store/productStore";
import { useUIStore } from "@/store/uiStore";

export function useProductFavorite() {
  const toggleLike = useProductStore((state) => state.toggleLike);
  const showToast = useUIStore((state) => state.showToast);

  const handleToggleFavorite = useCallback(
    (productId: string) => {
      const liked = toggleLike(productId);
      if (liked) {
        showToast("마음에 드는 상품으로 저장했어요.");
      }
    },
    [toggleLike, showToast],
  );

  return { handleToggleFavorite };
}
