import type { KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Text } from "@/components/common/Typography";
import { FavoriteButton } from "@/components/store/FavoriteButton";
import { Card } from "@/components/ui/card";
import type { StoreProduct } from "@/types/StoreProduct";
import { formatProductPrice, getProductImage } from "@/utils/productAssets";

interface ProductCardProps {
  product: StoreProduct;
  recommendationHint?: string;
  index?: number;
  onToggleFavorite: (productId: string) => void;
}

export function ProductCard({
  product,
  recommendationHint,
  index = 0,
  onToggleFavorite,
}: ProductCardProps) {
  const navigate = useNavigate();

  const openProductDetail = () => {
    navigate(`/store/${product.id}`);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProductDetail();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      className="min-w-0"
    >
      <Card className="relative h-[228px] overflow-hidden bg-white/75">
        <FavoriteButton
          liked={product.liked}
          onToggle={() => onToggleFavorite(product.id)}
          className="absolute right-2 top-2 z-10"
          size="sm"
        />

        <div
          role="button"
          tabIndex={0}
          onClick={openProductDetail}
          onKeyDown={handleCardKeyDown}
          className="flex h-full w-full cursor-pointer flex-col text-left"
        >
          <div className="h-[128px] shrink-0 bg-planat-bg-neutral">
            <img
              src={getProductImage(product.image)}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-start gap-1 px-3 pt-2 pb-1">
            <Text variant="cardTitle" as="h3" className="min-w-0 truncate">
              {product.name}
            </Text>
            {recommendationHint ? (
              <Text
                variant="helper"
                muted
                className="min-w-0 truncate text-planat-text-primary/50"
              >
                {recommendationHint}
              </Text>
            ) : null}
            <Text variant="caption" className="text-planat-text-primary">
              {formatProductPrice(product.price)}
            </Text>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
