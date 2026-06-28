import { motion } from "framer-motion";
import { CloudSun } from "lucide-react";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import type { Weather } from "@/types/Weather";
import { fadeTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface WeatherCardProps {
  weather: Weather;
  className?: string;
}

export function WeatherCard({ weather, className }: WeatherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fadeTransition()}
    >
      <Card
        className={cn(
          "flex flex-col gap-2 border-0 bg-[#49C1C1]/48 p-3",
          className,
        )}
      >
        <Text
          variant="caption"
          weight="medium"
          as="p"
          className="text-white font-semibold text-[14px]"
        >
          날씨 &amp; 환경
        </Text>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-planat-yellow/100">
            <CloudSun className="h-4 w-4 text-planat-text-primary" />
          </div>
          <div className="min-w-0">
            <Text
              variant="caption"
              as="p"
              weight="medium"
              className="text-white"
            >
              {weather.condition} · {weather.temperature}°C · 습도{" "}
              {weather.humidity}%
            </Text>
            <Text
              variant="helper"
              muted
              className="line-clamp-1 text-white/80 font-semibold text-[12px]"
            >
              🌿 {weather.idealTempMin}~{weather.idealTempMax}°C ·{" "}
              {weather.idealLight}
            </Text>
          </div>
        </div>

        <Text
          variant="caption"
          as="p"
          className="line-clamp-2 leading-snug text-white  font-medium"
        >
          ☀️ {weather.recommendation}
        </Text>
      </Card>
    </motion.div>
  );
}
