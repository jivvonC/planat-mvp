export interface StoreProduct {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  description: string;
  liked: boolean;
  recommendationHint?: string;
  relatedPlantIds?: string[];
  detailReasons?: string[];
}

export interface ProductRecommendation {
  productId: string;
  plantId: string;
  headline: string;
  reason: string;
  priority: number;
}

export const STORE_CATEGORIES = [
  "전체",
  "화분",
  "흙",
  "영양제",
  "물뿌리개",
  "식물등",
  "분무기",
  "지지대",
] as const;

export type StoreCategory = (typeof STORE_CATEGORIES)[number];
