import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductFavorite } from "@/hooks/useProductFavorite";
import { useActivityStore } from "@/store/activityStore";
import { useDiagnosisStore } from "@/store/diagnosisStore";
import { usePlantStore } from "@/store/plantStore";
import { useProductStore } from "@/store/productStore";
import { useUIStore } from "@/store/uiStore";
import {
  buildStoreRecommendations,
  getRecommendationForProduct,
} from "@/utils/storeRecommendations";

export function useProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const products = useProductStore((state) => state.products);
  const product = products.find((item) => item.id === productId);
  const plants = usePlantStore((state) => state.plants);
  const diagnosisHistory = useDiagnosisStore((state) => state.history);
  const activities = useActivityStore((state) => state.activities);
  const showToast = useUIStore((state) => state.showToast);
  const { handleToggleFavorite } = useProductFavorite();

  const recommendations = useMemo(
    () =>
      buildStoreRecommendations(
        products,
        plants,
        diagnosisHistory,
        activities,
      ),
    [products, plants, diagnosisHistory, activities],
  );

  const recommendationContext = useMemo(() => {
    if (!product) {
      return { headline: undefined, reasons: [], relatedPlants: [] };
    }

    return getRecommendationForProduct(product, plants, recommendations);
  }, [product, plants, recommendations]);

  const handleFavorite = useCallback(() => {
    if (!product) {
      return;
    }
    handleToggleFavorite(product.id);
  }, [product, handleToggleFavorite]);

  const handlePurchase = useCallback(() => {
    showToast("장바구니에 담았어요.");
  }, [showToast]);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return {
    product,
    recommendationContext,
    handleFavorite,
    handlePurchase,
    handleBack,
  };
}
