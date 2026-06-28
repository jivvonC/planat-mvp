import { motion } from "framer-motion";
import { PlantImage } from "@/components/common/PlantImage";
import { Text } from "@/components/common/Typography";
import { Badge } from "@/components/ui/badge";
import type { Plant } from "@/types";
import { FLOAT } from "@/lib/motion";
import { getPlantImage } from "@/utils/plantAssets";

function getHealthBadge(healthStatus: Plant["healthStatus"]) {
  switch (healthStatus) {
    case "Healthy":
      return { variant: "healthy" as const, label: "🟢 건강해요" };
    case "Needs Water":
      return { variant: "water" as const, label: "💧 물이 필요해요" };
    case "Needs Attention":
      return { variant: "water" as const, label: "🟠 관심이 필요해요" };
  }
}

interface PlantHeroProps {
  plant: Plant;
}

export function PlantHero({ plant }: PlantHeroProps) {
  const health = getHealthBadge(plant.healthStatus);

  return (
    <div className="mt-4 flex flex-col items-center gap-0 py-2">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: FLOAT.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PlantImage
          src={getPlantImage(plant.image)}
          alt={plant.nickname}
          size="hero"
          className="block h-auto max-h-[min(45svh,420px)] w-auto max-w-[min(95%,400px)]"
        />
      </motion.div>

      <div className="-mt-2 flex flex-col items-center gap-0.5 text-center">
        <Text
          variant="sectionTitle"
          as="h2"
          className="text-white font-semibold text-[20px]"
        >
          {plant.nickname}
        </Text>
        <Text
          variant="caption"
          className="text-white/80 font-medium text-[14px]"
        >
          {plant.species}
        </Text>
        <Badge
          variant={health.variant}
          className="mt-0.5 text-white font-medium text-[12px]"
        >
          {health.label}
        </Badge>
      </div>
    </div>
  );
}
