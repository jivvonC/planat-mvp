import { motion } from "framer-motion";
import baobabPlant from "@/assets/icons/plants/baobab.png";
import waterIcon from "@/assets/icons/ui/water.png";
import { Text } from "@/components/common/Typography";
import { cn } from "@/lib/utils";
import { getDefaultWeather } from "@/utils/weather";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

const APP_ICON_COLORS = [
  "bg-[#8ecae6]",
  "bg-[#ffb4a2]",
  "bg-[#b8e0d2]",
  "bg-[#cdb4db]",
  "bg-[#ffd6a5]",
  "bg-[#a2d2ff]",
  "bg-[#ffc8dd]",
  "bg-[#bde0fe]",
] as const;

function getWeatherMessage(condition: string): string {
  switch (condition) {
    case "흐림":
      return "오늘은 구름이 조금 꼈어요";
    case "맑음":
      return "오늘은 햇빛이 좋아요";
    case "비":
      return "오늘은 비가 올 것 같아요";
    default:
      return `오늘은 ${condition}이에요`;
  }
}

interface PlanatHomeWidgetProps {
  className?: string;
}

function PlanatHomeWidget({ className }: PlanatHomeWidgetProps) {
  const weather = getDefaultWeather();

  return (
    <div
      className={cn(
        "overflow-visible rounded-[18px] bg-gradient-to-br from-[#FFFFFF] to-[#E6E6E6] p-[1.5px]",
        className,
      )}
    >
      <div className="relative aspect-square overflow-visible rounded-[16.5px] bg-[#ffffff] p-3.5 shadow-[inset_0_2px_10px_rgba(93,67,58,0.08),0_8px_20px_rgba(93,67,58,0.12)]">
        <p className="pr-[4.75rem] font-medium text-black text-[11px] leading-none whitespace-nowrap">
          {getWeatherMessage(weather.condition)}
        </p>

        <p className="mt-1 font-medium text-black text-[60px] leading-none tracking-tight">
          {weather.temperature}°
        </p>

        <div className="absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#b8e4f0] shadow-[0_2px_6px_rgba(73,193,193,0.35)]">
          <img
            src={waterIcon}
            alt=""
            className="h-9 w-9 object-contain"
            draggable={false}
            aria-hidden="true"
          />
        </div>

        <img
          src={baobabPlant}
          alt=""
          className="absolute -right-4 bottom-0 h-[7.75rem] w-[7.75rem] object-contain"
          draggable={false}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

interface OnboardingWidgetAddPreviewProps {
  className?: string;
}

export function OnboardingWidgetAddPreview({
  className,
}: OnboardingWidgetAddPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mx-auto w-full max-w-[260px] overflow-visible py-2",
        className,
      )}
      aria-hidden="true"
    >
      <div className="overflow-visible rounded-[2rem] border-[3px] border-[#2a2a2e] bg-[#1c1c1e] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
        <div className="relative min-h-[360px] overflow-visible rounded-[1.4rem]">
          <div className="absolute inset-0 overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-[#cfe9f5] via-[#e8f3f8] to-[#d4e8f0]">
            <div className="flex items-center justify-between px-5 pt-2.5 pb-1">
              <Text
                variant="helper"
                as="span"
                className="font-semibold text-[#1c1c1e]/80 text-[10px]"
              >
                9:41
              </Text>
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="h-2 w-3 rounded-sm bg-[#1c1c1e]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#1c1c1e]/70" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2.5 px-4 pt-3">
              {APP_ICON_COLORS.map((color, index) => (
                <div
                  key={color}
                  className={cn(
                    "aspect-square rounded-[14px] shadow-sm",
                    color,
                  )}
                  style={{ opacity: 0.35 + (index % 3) * 0.08 }}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div
              className="absolute right-0 bottom-1 left-0 mx-auto h-1 w-24 rounded-full bg-[#1c1c1e]/25"
              aria-hidden="true"
            />
          </div>

          <motion.div
            className="absolute top-[4.5rem] right-4 left-4 z-10 overflow-visible"
            initial={{ opacity: 0, scale: 0.72, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.7,
              ease: REVEAL_EASE,
            }}
            style={{ transformOrigin: "center center" }}
          >
            <motion.div
              className="overflow-visible"
              initial={{ boxShadow: "0 0 0 0 rgba(73,193,193,0.45)" }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(73,193,193,0.45)",
                  "0 0 0 10px rgba(73,193,193,0)",
                ],
              }}
              transition={{
                delay: 1.05,
                duration: 0.65,
                ease: "easeOut",
              }}
            >
              <PlanatHomeWidget />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
