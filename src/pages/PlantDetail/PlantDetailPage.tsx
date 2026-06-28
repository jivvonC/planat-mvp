import { Navigate, useNavigate } from "react-router-dom";
import starsImage from "@/assets/images/illustrations/stars.png";
import { FloatingActionButton } from "@/components/common/FloatingActionButton";
import { ScreenContent } from "@/components/common/ScreenContent";
import { WeatherCard } from "@/components/common/WeatherCard";
import { CareTipCard } from "@/components/plants/CareTipCard";
import { PlantHero } from "@/components/plants/PlantHero";
import { TodaysCareCard } from "@/components/plants/TodaysCareCard";
import { MissionBottomSheet } from "@/pages/PlantDetail/components/MissionBottomSheet";
import { usePlantDetail } from "@/pages/PlantDetail/hooks/usePlantDetail";
import { ScreenLayout } from "@/layouts/ScreenLayout";

export default function PlantDetailPage() {
  const navigate = useNavigate();
  const {
    plant,
    mission,
    careTip,
    weather,
    wateredToday,
    missionSheetOpen,
    selectedOption,
    setSelectedOption,
    handleWater,
    openMissionSheet,
    closeMissionSheet,
    handleMissionComplete,
  } = usePlantDetail();

  if (!plant) {
    return <Navigate to="/plants" replace />;
  }

  return (
    <>
      <ScreenLayout
        title={plant.nickname}
        showBack
        className="bg-gradient-to-b from-[#2A7E8F] to-[#165361]"
      >
        <ScreenContent className="gap-3 pb-20">
          <div className="relative">
            <img
              src={starsImage}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-0.3 left-1/2 z-0 w-[245px] max-w-full -translate-x-[calc(50%+60px)] select-none"
            />
            <div className="relative z-10 mt-3">
              <PlantHero plant={plant} />
            </div>
          </div>
          <TodaysCareCard
            wateredToday={wateredToday}
            mission={mission}
            onWater={handleWater}
            onMissionClick={openMissionSheet}
          />
          <WeatherCard weather={weather} />
          {careTip ? <CareTipCard tip={careTip} /> : null}
        </ScreenContent>
      </ScreenLayout>

      <FloatingActionButton
        label="AI 진단"
        onClick={() => navigate(`/plants/${plant.id}/diagnosis`)}
      />

      <MissionBottomSheet
        open={missionSheetOpen}
        mission={mission}
        selectedOption={selectedOption}
        onSelectOption={setSelectedOption}
        onComplete={handleMissionComplete}
        onClose={closeMissionSheet}
      />
    </>
  );
}
