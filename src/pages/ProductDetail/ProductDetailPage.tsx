import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { ScreenContent } from "@/components/common/ScreenContent";
import { Text } from "@/components/common/Typography";
import {
  ProductActionBar,
  RecommendationReasonSection,
  RelatedPlantsSection,
} from "@/components/store";
import { ProductDetailHeader } from "@/pages/ProductDetail/components/ProductDetailHeader";
import { useProductDetail } from "@/pages/ProductDetail/hooks/useProductDetail";
import { formatProductPrice, getProductImage } from "@/utils/productAssets";

export default function ProductDetailPage() {
  const {
    product,
    recommendationContext,
    handleFavorite,
    handlePurchase,
    handleBack,
  } = useProductDetail();

  if (!product) {
    return <Navigate to="/store" replace />;
  }

  return (
    <div className="relative flex min-h-svh flex-col">
      <ProductDetailHeader
        liked={product.liked}
        onBack={handleBack}
        onToggleFavorite={handleFavorite}
      />

      <main className="flex flex-1 flex-col overflow-y-auto pt-[calc(var(--height-header)+env(safe-area-inset-top))] pb-[calc(5.5rem+env(safe-area-inset-bottom))]">
        <ScreenContent className="gap-6 pb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex justify-center px-4 py-2"
          >
            <img
              src={getProductImage(product.image)}
              alt={product.name}
              className="max-h-64 w-full max-w-xs object-contain"
            />
          </motion.div>

          <div className="flex flex-col gap-2">
            <Text variant="pageTitle" as="h1">
              {product.name}
            </Text>
            <Text variant="body" className="text-planat-text-primary">
              {formatProductPrice(product.price)}
            </Text>
            <Text variant="body" muted>
              {product.description}
            </Text>
          </div>

          <RecommendationReasonSection
            headline={recommendationContext.headline}
            reasons={recommendationContext.reasons}
          />

          <RelatedPlantsSection plants={recommendationContext.relatedPlants} />
        </ScreenContent>
      </main>

      <ProductActionBar
        liked={product.liked}
        onToggleFavorite={handleFavorite}
        onPurchase={handlePurchase}
      />
    </div>
  );
}
