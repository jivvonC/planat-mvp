import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import type { Plant } from "@/types";
import type { ProductRecommendation, StoreProduct } from "@/types/StoreProduct";
import { formatProductPrice, getProductImage } from "@/utils/productAssets";

interface RecommendationCardProps {
  recommendation: ProductRecommendation;
  product: StoreProduct;
  plant?: Plant;
  index?: number;
}

export function RecommendationCard({
  recommendation,
  product,
  plant,
  index = 0,
}: RecommendationCardProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/store/${product.id}`)}
      className="w-full text-left"
    >
      <Card className="relative flex gap-3 p-3 bg-white/75">
        {plant ? (
          <span className="absolute right-3 top-3 z-10 max-w-[40%] truncate rounded-full bg-planat-bg-neutral px-2 py-0.5 text-[length:var(--text-helper)] text-planat-text-secondary shadow-[var(--shadow-soft)]">
            {plant.nickname}
          </span>
        ) : null}
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[var(--radius-input)] bg-planat-bg-neutral">
          <img
            src={getProductImage(product.image)}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <Text
            variant="caption"
            className="text-planat-primary-dark text-[12px]"
          >
            {recommendation.headline}
          </Text>
          <Text
            variant="cardTitle"
            as="h3"
            className="min-w-0 truncate font-semibold text-[18px]"
          >
            {product.name}
          </Text>
          <Text
            variant="caption"
            muted
            className="min-w-0 truncate text-planat-text-primary/50 font-medium text-[12px]"
          >
            {recommendation.reason}
          </Text>
          <Text variant="caption" className="text-planat-text-primary">
            {formatProductPrice(product.price)}
          </Text>
        </div>
      </Card>
    </motion.button>
  );
}
