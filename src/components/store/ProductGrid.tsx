import { EmptyState } from "@/components/common/EmptyState";
import { ProductCard } from "@/components/store/ProductCard";
import type { StoreProduct } from "@/types/StoreProduct";

interface ProductGridProps {
  products: StoreProduct[];
  recommendationHints: Record<string, string | undefined>;
  onToggleFavorite: (productId: string) => void;
}

export function ProductGrid({
  products,
  recommendationHints,
  onToggleFavorite,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        title="검색 결과가 없어요."
        description="다른 카테고리를 둘러볼까요?"
        className="rounded-[var(--radius-card)] bg-white/85 py-10"
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          recommendationHint={recommendationHints[product.id]}
          index={index}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
