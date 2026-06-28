import { motion } from "framer-motion";
import { Check } from "lucide-react";
import waterIcon from "@/assets/icons/ui/water.png";
import { Text } from "@/components/common/Typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Mission } from "@/types";
import { ENTER_Y, fadeInUpTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TodaysCareCardProps {
  wateredToday: boolean;
  mission?: Mission;
  onWater: () => void;
  onMissionClick: () => void;
  className?: string;
}

export function TodaysCareCard({
  wateredToday,
  mission,
  onWater,
  onMissionClick,
  className,
}: TodaysCareCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: ENTER_Y.subtle }}
      animate={{ opacity: 1, y: 0 }}
      transition={fadeInUpTransition()}
    >
      <Card
        className={cn(
          "flex flex-col gap-2 border-0 p-3 bg-[#49C1C1]/38",
          className,
        )}
      >
        <Text
          variant="caption"
          weight="medium"
          as="p"
          className="text-white font-semibold text-[14px]"
        >
          오늘의 돌봄
        </Text>

        <Button
          variant="primary"
          size="sm"
          fullWidth
          disabled={wateredToday}
          onClick={onWater}
          className={cn(
            "h-10 gap-1.5 font-extrabold text-white",
            wateredToday && "bg-white/40 disabled:opacity-100",
          )}
        >
          <img
            src={waterIcon}
            alt=""
            className="h-5 w-5 shrink-0 object-contain"
            aria-hidden="true"
          />
          {wateredToday ? "오늘 물을 줬어요" : "물 주기"}
        </Button>

        {mission ? (
          <button
            type="button"
            onClick={onMissionClick}
            disabled={mission.completed}
            className={cn(
              "flex min-h-10 w-full items-center gap-2 rounded-[var(--radius-button)] bg-planat-bg-neutral/50 px-2.5 py-2 text-left transition-colors text-white/80",
              !mission.completed && "hover:bg-planat-bg-neutral",
            )}
          >
            <motion.div
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2",
                mission.completed
                  ? "border-planat-green bg-planat-green text-white"
                  : "border-planat-text-secondary/40 bg-white",
              )}
              animate={mission.completed ? { scale: [1, 1.12, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {mission.completed ? (
                <Check className="h-3 w-3" aria-hidden="true" />
              ) : null}
            </motion.div>
            <div className="min-w-0 flex-1">
              <Text
                variant="helper"
                muted
                className="leading-tight text-accent-foreground font-semibold text-[14px]"
              >
                🌱 오늘의 미션
              </Text>
              <Text
                variant="caption"
                as="p"
                className={cn(
                  "line-clamp-1 leading-snug",
                  mission.completed && "text-planat-text-primary/60",
                )}
              >
                {mission.description}
              </Text>
            </div>
          </button>
        ) : null}
      </Card>
    </motion.div>
  );
}
