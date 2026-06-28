import { motion } from "framer-motion";
import { PlantImage } from "@/components/common/PlantImage";
import { Section } from "@/components/common/Section";
import { Text } from "@/components/common/Typography";
import type { Plant } from "@/types";
import { getPlantImage } from "@/utils/plantAssets";

interface RelatedPlantsSectionProps {
  plants: Plant[];
}

export function RelatedPlantsSection({ plants }: RelatedPlantsSectionProps) {
  if (plants.length === 0) {
    return null;
  }

  return (
    <Section title="추천 식물">
      <div className="-mx-[var(--spacing-screen-x)] flex gap-2 overflow-x-auto px-[var(--spacing-screen-x)] pb-1">
        {plants.map((plant, index) => (
          <motion.div
            key={plant.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            className="flex w-[5.75rem] shrink-0 flex-col items-center gap-2 rounded-[var(--radius-card)] bg-white/85 px-2 py-3 shadow-[var(--shadow-soft)]"
          >
            <PlantImage
              src={getPlantImage(plant.image)}
              alt={plant.nickname}
              size="sm"
              className="mx-0 h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <Text variant="caption" className="w-full truncate text-center">
              {plant.nickname}
            </Text>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
