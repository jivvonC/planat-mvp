import { ScreenContent } from "@/components/common/ScreenContent";
import { Text } from "@/components/common/Typography";
import { ScreenLayout } from "@/layouts/ScreenLayout";
import { useHomeSummary } from "@/hooks/useHomeSummary";
import { PlanetHero } from "@/pages/Plants/components/PlanetHero";
import { PlantsHomeHeader } from "@/pages/Plants/components/PlantsHomeHeader";
import { TodaySummary } from "@/pages/Plants/components/TodaySummary";
import { TodayWeatherBrief } from "@/pages/Plants/components/TodayWeatherBrief";

export default function PlantsPage() {
  const { plants, summaryItems, unreadCount } = useHomeSummary();

  return (
    <ScreenLayout
      header={<PlantsHomeHeader notificationCount={unreadCount} />}
      withBottomNav
      contentClassName="flex min-h-0 flex-1 flex-col"
      className="bg-gradient-to-b from-[#425B62] from-0% via-[#32A9A9] via-60% to-[#32A9A9] to-100%"
    >
      <div className="flex shrink-0 flex-col gap-1 pb-1">
        <TodayWeatherBrief />
        <Text
          variant="body"
          as="p"
          className="px-4 text-white/80 font-medium text-[14px]"
        >
          오늘 식물은 어떤 하루를 보냈을까요?
        </Text>
      </div>
      <div className="grid min-h-0 flex-1 grid-rows-[1fr_auto]">
        <div className="flex min-h-[40svh] items-center justify-center py-2">
          <PlanetHero plants={plants} />
        </div>
        <ScreenContent className="mb-2 shrink-0 gap-2 -translate-y-5">
          <TodaySummary items={summaryItems} />
        </ScreenContent>
      </div>
    </ScreenLayout>
  );
}
