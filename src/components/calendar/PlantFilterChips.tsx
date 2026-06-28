import { Chip } from "@/components/ui/chip";

interface PlantFilterChipsProps {
  plants: { id: string; nickname: string }[];
  selectedPlantId: string | null;
  onSelect: (plantId: string | null) => void;
}

export function PlantFilterChips({
  plants,
  selectedPlantId,
  onSelect,
}: PlantFilterChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      <Chip
        selected={selectedPlantId === null}
        onClick={() => onSelect(null)}
        className="shrink-0"
      >
        전체
      </Chip>
      {plants.map((plant) => (
        <Chip
          key={plant.id}
          selected={selectedPlantId === plant.id}
          onClick={() => onSelect(plant.id)}
          className="shrink-0"
        >
          {plant.nickname}
        </Chip>
      ))}
    </div>
  );
}
