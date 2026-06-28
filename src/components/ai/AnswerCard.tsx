import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Text } from "@/components/common/Typography";
import type { DiagnosisOption } from "@/types";

interface AnswerCardProps {
  option: DiagnosisOption;
  selected: boolean;
  onSelect: () => void;
  layout?: "half" | "full";
}

export function AnswerCard({
  option,
  selected,
  onSelect,
  layout = "full",
}: AnswerCardProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "flex min-h-14 items-center justify-center gap-2 rounded-[var(--radius-card)] border-2 px-4 py-3 text-left transition-[border-color,background-color,box-shadow] duration-200",
        layout === "half" ? "flex-1" : "w-full",
        selected
          ? "border-planat-primary-light bg-planat-primary-light shadow-[var(--shadow-soft)]"
          : "border-transparent bg-white/30 shadow-[var(--shadow-card)]",
      )}
    >
      {option.emoji ? (
        <span className="text-xl" aria-hidden="true">
          {option.emoji}
        </span>
      ) : null}
      <Text
        variant="body"
        className={cn(
          "font-medium text-[16px] text-white",
          selected && "font-semibold",
        )}
      >
        {option.label}
      </Text>
    </motion.button>
  );
}
