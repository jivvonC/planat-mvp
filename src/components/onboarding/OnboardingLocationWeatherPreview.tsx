import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloudSun, MapPin } from "lucide-react";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getDefaultWeather } from "@/utils/weather";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;
const PLACEHOLDER_REGION = "서울특별시";

interface OnboardingLocationWeatherPreviewProps {
  region: string;
  className?: string;
}

export function OnboardingLocationWeatherPreview({
  region,
  className,
}: OnboardingLocationWeatherPreviewProps) {
  const weather = getDefaultWeather();
  const trimmedRegion = region.trim();
  const [displayRegion, setDisplayRegion] = useState(trimmedRegion);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDisplayRegion(trimmedRegion);
    }, 350);

    return () => window.clearTimeout(timer);
  }, [trimmedRegion]);

  const regionLabel = displayRegion || PLACEHOLDER_REGION;
  const isPlaceholder = displayRegion.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("flex w-full justify-center", className)}
      aria-hidden="true"
    >
      <motion.div
        animate={{ scale: isPlaceholder ? 1 : [1, 1.02, 1] }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
          times: [0, 0.45, 1],
        }}
        key={regionLabel}
      >
        <Card className="w-full max-w-[300px] border-0 bg-white/25 p-4 shadow-[var(--shadow-soft)]">
          <Text
            variant="caption"
            as="p"
            className="font-semibold text-white text-[16px]"
          >
            오늘의 날씨
          </Text>

          <div className="mt-3 overflow-hidden rounded-[var(--radius-input)] bg-white/20 p-3">
            <div className="flex items-center gap-2">
              <MapPin
                className="h-4 w-4 shrink-0 text-planat-primary-dark"
                aria-hidden="true"
              />
              <div className="min-h-5 min-w-0 flex-1 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={regionLabel}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: REVEAL_EASE }}
                  >
                    <Text
                      variant="caption"
                      as="p"
                      className={cn(
                        "truncate font-semibold text-[14px]",
                        isPlaceholder ? "text-white/55" : "text-white",
                      )}
                    >
                      {regionLabel}
                    </Text>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${regionLabel}-weather`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, delay: 0.05, ease: REVEAL_EASE }}
                className="mt-2.5 flex items-start gap-2"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-planat-yellow">
                  <CloudSun
                    className="h-4 w-4 text-planat-text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <Text
                    variant="caption"
                    as="p"
                    className="font-medium text-white text-[13px]"
                  >
                    {weather.condition} {weather.temperature}°C · 습도{" "}
                    {weather.humidity}%
                  </Text>
                  <Text
                    variant="helper"
                    as="p"
                    className="mt-1 line-clamp-2 font-medium text-white/80 text-[12px] leading-snug"
                  >
                    {weather.recommendation}
                  </Text>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Text
            variant="helper"
            as="p"
            className="mt-2.5 text-center font-medium text-white/70 text-[12px]"
          >
            매일 아침, {isPlaceholder ? "내 지역" : regionLabel} 날씨를
            알려드려요
          </Text>
        </Card>
      </motion.div>
    </motion.div>
  );
}
