import { CloudSun } from "lucide-react";
import { Text } from "@/components/common/Typography";
import { useOnboardingStore } from "@/store/onboardingStore";
import { getDefaultWeather } from "@/utils/weather";

export function TodayWeatherBrief() {
  const weather = getDefaultWeather();
  const region = useOnboardingStore((state) => state.region);

  return (
    <div className="flex shrink-0 items-center gap-2 px-4">
      <CloudSun
        className="h-4 w-4 shrink-0 text-white/90"
        aria-hidden="true"
      />
      <Text
        variant="body"
        as="p"
        className="text-white/90 font-medium text-[14px]"
      >
        {region ? `${region} · ` : null}
        {weather.condition} {weather.temperature}°C · 습도 {weather.humidity}%
      </Text>
    </div>
  );
}
