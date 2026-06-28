import type { DiagnosisHistory, Plant, RecentActivity, StoreProduct } from "@/types";
import type { ProductRecommendation } from "@/types/StoreProduct";

function dedupeRecommendations(
  items: ProductRecommendation[],
): ProductRecommendation[] {
  const seen = new Set<string>();
  const result: ProductRecommendation[] = [];

  for (const item of items.sort((a, b) => b.priority - a.priority)) {
    const key = `${item.productId}-${item.plantId}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(item);
  }

  return result;
}

export function buildStoreRecommendations(
  products: StoreProduct[],
  plants: Plant[],
  diagnosisHistory: DiagnosisHistory[],
  activities: RecentActivity[],
): ProductRecommendation[] {
  const recommendations: ProductRecommendation[] = [];
  const productMap = Object.fromEntries(products.map((p) => [p.id, p]));
  const plantMap = Object.fromEntries(plants.map((p) => [p.id, p]));

  for (const history of diagnosisHistory) {
    const plant = plantMap[history.plantId];
    if (!plant) {
      continue;
    }

    if (history.result.includes("과습")) {
      const product = productMap["product-01"];
      if (product) {
        recommendations.push({
          productId: product.id,
          plantId: plant.id,
          headline: `${plant.nickname}에게 추천해요.`,
          reason: "최근 과습 진단을 받아 배수가 좋은 화분을 추천해요.",
          priority: 10,
        });
      }
    }
  }

  for (const plant of plants) {
    if (plant.healthStatus === "Needs Water") {
      const product = productMap["product-05"];
      if (product) {
        recommendations.push({
          productId: product.id,
          plantId: plant.id,
          headline: `${plant.nickname}에게 추천해요.`,
          reason: "물주기가 다가와 잘 뿌릴 수 있는 물뿌리개를 추천해요.",
          priority: 9,
        });
      }
    }

    for (const productId of plant.recommendedProductIds) {
      const product = productMap[productId];
      if (!product) {
        continue;
      }

      recommendations.push({
        productId: product.id,
        plantId: plant.id,
        headline: `${plant.nickname}에게 추천해요.`,
        reason:
          product.recommendationHint ??
          "지금 식물 상태에 도움이 될 수 있는 아이템이에요.",
        priority: 8,
      });
    }
  }

  const growthActivity = activities.find(
    (activity) =>
      activity.type === "observation" ||
      activity.title.includes("새 잎") ||
      activity.title.includes("성장"),
  );

  if (growthActivity) {
    const plant = plantMap[growthActivity.plantId];
    const product = productMap["product-03"];
    if (plant && product) {
      recommendations.push({
        productId: product.id,
        plantId: plant.id,
        headline: "새 잎이 나오고 있어요.",
        reason: "성장을 도와줄 영양제를 추천해요.",
        priority: 7,
      });
    }
  }

  for (const plant of plants.filter((item) => item.location === "Outdoor")) {
    const product = productMap["product-06"];
    if (product) {
      recommendations.push({
        productId: product.id,
        plantId: plant.id,
        headline: `${plant.nickname}에게 추천해요.`,
        reason: "비 예보가 있어 실내로 옮길 때 밝은 빛을 보충해 줄 수 있어요.",
        priority: 6,
      });
    }
  }

  for (const plant of plants.filter((item) => item.healthStatus === "Needs Attention")) {
    const product = productMap["product-02"];
    if (product) {
      recommendations.push({
        productId: product.id,
        plantId: plant.id,
        headline: `${plant.nickname}에게 추천해요.`,
        reason: "최근 실내에서 키우고 있어 통풍이 좋은 화분받침을 추천해요.",
        priority: 5,
      });
    }
  }

  return dedupeRecommendations(recommendations).slice(0, 3);
}

export function getRecommendationForProduct(
  product: StoreProduct,
  plants: Plant[],
  allRecommendations: ProductRecommendation[],
): {
  headline?: string;
  reasons: string[];
  relatedPlants: Plant[];
} {
  const matched = allRecommendations.filter(
    (item) => item.productId === product.id,
  );

  const relatedPlantIds = new Set<string>([
    ...(product.relatedPlantIds ?? []),
    ...matched.map((item) => item.plantId),
  ]);

  const relatedPlants = plants.filter((plant) =>
    relatedPlantIds.has(plant.id),
  );

  const reasons =
    product.detailReasons ??
    matched.map((item) => item.reason).slice(0, 3) ??
    [];

  return {
    headline: matched[0]?.headline,
    reasons: reasons.length > 0 ? reasons : [product.recommendationHint ?? ""],
    relatedPlants,
  };
}

export function getGridRecommendationHint(
  product: StoreProduct,
  allRecommendations: ProductRecommendation[],
): string | undefined {
  const matched = allRecommendations.find((item) => item.productId === product.id);
  return matched?.reason ?? product.recommendationHint;
}
