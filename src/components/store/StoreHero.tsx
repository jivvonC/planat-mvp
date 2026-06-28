import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import myPlantsIcon from "@/assets/icons/navigation/my-plants.png";
import pointIcon from "@/assets/images/illustrations/staricon.png";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import { useStoreHero } from "@/pages/Store/hooks/useStoreHero";
import { cn } from "@/lib/utils";

const RECOMMENDATION_INTRO = "🌿 오늘 우리 식물들에게 추천해요.";

export function StoreHero() {
  const navigate = useNavigate();
  const { nickname, careDays, points, pointsToNextReward, plantCount } =
    useStoreHero();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col gap-3"
      aria-label="스토어 홈"
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/30 text-lg shadow-[var(--shadow-soft)]"
          aria-hidden="true"
        >
          👤
        </div>
        <div className="min-w-0 flex-1">
          <Text
            variant="cardTitle"
            as="p"
            className="text-white font-semibold text-[16px]"
          >
            {nickname}님
          </Text>
          <Text
            variant="caption"
            className="text-white/75 text-[13px] font-medium"
          >
            💧 {careDays}일째 함께 돌보고 있어요.
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Card className="flex flex-col gap-1 border-0 bg-planat-primary-light/80 p-3 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-1.5">
            <img
              src={pointIcon}
              alt=""
              aria-hidden="true"
              className="h-4 w-4 object-contain"
            />
            <Text
              variant="helper"
              className="text-planat-text-secondary font-medium text-white"
            >
              포인트
            </Text>
          </div>
          <Text
            variant="sectionTitle"
            as="p"
            className="text-white font-semibold text-[20px]"
          >
            {points}P
          </Text>
          <Text
            variant="helper"
            muted
            className="leading-snug text-white/80 font-medium text-[12px]"
          >
            다음 보상까지 {pointsToNextReward}P 남았어요.
          </Text>
        </Card>

        <Card
          role="button"
          tabIndex={0}
          className={cn(
            "flex flex-col gap-1 border-0 bg-planat-primary-light/80 p-3 shadow-[var(--shadow-card)]",
            "cursor-pointer transition-transform active:scale-[0.98]",
          )}
          onClick={() => navigate("/plants")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              navigate("/plants");
            }
          }}
        >
          <div className="flex items-center gap-1.5 ">
            <img
              src={myPlantsIcon}
              alt=""
              aria-hidden="true"
              className="h-4 w-4 object-contain"
            />
            <Text
              variant="helper"
              className="text-planat-text-secondary font-medium text-white"
            >
              내 식물
            </Text>
          </div>
          <Text
            variant="sectionTitle"
            as="p"
            className="text-white font-semibold text-[20px]"
          >
            {plantCount}개
          </Text>
        </Card>
      </div>

      <Text variant="body" className="text-white/90 font-medium text-[14px]">
        {RECOMMENDATION_INTRO}
      </Text>
    </motion.section>
  );
}
