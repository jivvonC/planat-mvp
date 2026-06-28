import { useMemo } from "react";
import { useActivityStore } from "@/store/activityStore";
import { useDiagnosisStore } from "@/store/diagnosisStore";
import { usePlantStore } from "@/store/plantStore";
import { useProductStore } from "@/store/productStore";
import {
  buildStoreRecommendations,
  getGridRecommendationHint,
} from "@/utils/storeRecommendations";

export function useStorePage() {
  const products = useProductStore((state) => state.products);
  const selectedCategory = useProductStore((state) => state.selectedCategory);
  const setSelectedCategory = useProductStore((state) => state.setSelectedCategory);
  const plants = usePlantStore((state) => state.plants);
  const diagnosisHistory = useDiagnosisStore((state) => state.history);
  const activities = useActivityStore((state) => state.activities);

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

  const recommendationHints = useMemo(() => {
    return Object.fromEntries(
      products.map((product) => [
        product.id,
        getGridRecommendationHint(product, recommendations),
      ]),
    );
  }, [products, recommendations]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "전체") {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  const plantLookup = useMemo(
    () => Object.fromEntries(plants.map((plant) => [plant.id, plant])),
    [plants],
  );

  return {
    products,
    recommendations,
    recommendationHints,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    plantLookup,
  };
}
