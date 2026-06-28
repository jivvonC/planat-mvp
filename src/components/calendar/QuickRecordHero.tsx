import { motion } from "framer-motion";
import { PlantImage } from "@/components/common/PlantImage";
import { cn } from "@/lib/utils";
import type { Plant } from "@/types";
import { getPlantImage } from "@/utils/plantAssets";

interface QuickAction {
  id: "water" | "fertilizer" | "photo" | "note";
  emoji: string;
  label: string;
  onClick: () => void;
}

interface QuickRecordHeroProps {
  plants: Plant[];
  selectedPlantId: string;
  onSelectPlant: (plantId: string) => void;
  onWater: () => void;
  onFertilizer: () => void;
  onPhoto: () => void;
  onNote: () => void;
}

export function QuickRecordHero({
  plants,
  selectedPlantId,
  onSelectPlant,
  onWater,
  onFertilizer,
  onPhoto,
  onNote,
}: QuickRecordHeroProps) {
  const actions: QuickAction[] = [
    { id: "water", emoji: "💧", label: "물주기", onClick: onWater },
    { id: "fertilizer", emoji: "🌱", label: "영양제", onClick: onFertilizer },
    { id: "photo", emoji: "📷", label: "사진", onClick: onPhoto },
    { id: "note", emoji: "📝", label: "메모", onClick: onNote },
  ];

  return (
    <section className="rounded-[var(--radius-card)] bg-white/75 p-4 shadow-[var(--shadow-card)]">
      <h2 className="text-[18px] font-semibold leading-none text-planat-text-primary">
        <span className="block">오늘 식물과</span>
        <span className="mt-1 block">어떤 시간을 보낼까요?</span>
      </h2>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {plants.map((plant) => {
          const selected = plant.id === selectedPlantId;
          return (
            <button
              key={plant.id}
              type="button"
              aria-label={`${plant.nickname} 선택`}
              aria-pressed={selected}
              onClick={() => onSelectPlant(plant.id)}
              className={cn(
                "flex shrink-0 flex-col items-center gap-1 rounded-[var(--radius-input)] p-1 transition-[transform,background-color]",
                selected ? "bg-planat-primary-light/15" : "bg-transparent",
              )}
            >
              <PlantImage
                src={getPlantImage(plant.image)}
                alt={plant.nickname}
                size="sm"
                className={cn(
                  "rounded-full border-1 transition-colors bg-white/60",
                  selected
                    ? "border-planat-primary-light"
                    : "border-transparent opacity-80",
                )}
              />
              <span className="max-w-12 truncate text-[length:var(--text-helper)] text-planat-text-primary text-medium">
                {plant.nickname}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {actions.map((action) => (
          <motion.button
            key={action.id}
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={action.onClick}
            className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-[var(--radius-input)] bg-planat-bg-neutral/60 px-2 py-2"
          >
            <span className="text-lg" aria-hidden="true">
              {action.emoji}
            </span>
            <span className="text-[length:var(--text-helper)] font-medium text-planat-text-primary">
              {action.label}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
