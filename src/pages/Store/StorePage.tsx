import { ScreenContent } from "@/components/common/ScreenContent";
import { Section } from "@/components/common/Section";
import { Text } from "@/components/common/Typography";
import {
  CategoryChips,
  ProductGrid,
  RecommendationCard,
  StoreHero,
} from "@/components/store";
import { useProductFavorite } from "@/hooks/useProductFavorite";
import { ScreenLayout } from "@/layouts/ScreenLayout";
import { StoreHomeHeader } from "@/pages/Store/components/StoreHomeHeader";
import { useStorePage } from "@/pages/Store/hooks/useStorePage";
import { useNotificationStore } from "@/store/notificationStore";

export default function StorePage() {
  const {
    products,
    recommendations,
    recommendationHints,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    plantLookup,
  } = useStorePage();
  const { handleToggleFavorite } = useProductFavorite();
  const unreadCount = useNotificationStore(
    (state) =>
      state.notifications.filter((notification) => !notification.isRead).length,
  );

  return (
    <ScreenLayout
      header={<StoreHomeHeader notificationCount={unreadCount} />}
      withBottomNav
      contentClassName="pt-2"
      className="  bg-gradient-to-b
  from-[#32A9A9]
  from-0%
  via-[#425B62]
  via-60%
  to-[#425B62]
  to-100%"
    >
      <ScreenContent className="gap-6 pb-8">
        <StoreHero />

        {recommendations.length > 0 ? (
          <Section
            title="추천 상품"
            titleClassName="text-white font-semibold text-[20px]"
          >
            <Text
              variant="caption"
              muted
              className="-mt-2 text-white/60 font-medium text-[12px]"
            >
              식물에 꼭 필요한 아이템을 준비했어요.
            </Text>
            <div className="flex flex-col gap-3">
              {recommendations.map((recommendation, index) => {
                const product = products.find(
                  (item) => item.id === recommendation.productId,
                );

                if (!product) {
                  return null;
                }

                return (
                  <RecommendationCard
                    key={`${recommendation.productId}-${recommendation.plantId}`}
                    recommendation={recommendation}
                    product={product}
                    plant={plantLookup[recommendation.plantId]}
                    index={index}
                  />
                );
              })}
            </div>
          </Section>
        ) : null}

        <Section
          title="카테고리"
          titleClassName="text-white font-semibold text-[20px]"
        >
          <CategoryChips
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </Section>

        <ProductGrid
          products={filteredProducts}
          recommendationHints={recommendationHints}
          onToggleFavorite={handleToggleFavorite}
        />
      </ScreenContent>
    </ScreenLayout>
  );
}
