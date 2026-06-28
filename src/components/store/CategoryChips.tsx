import { motion } from "framer-motion";
import { Chip } from "@/components/ui/chip";
import { STORE_CATEGORIES, type StoreCategory } from "@/types/StoreProduct";

interface CategoryChipsProps {
  selectedCategory: StoreCategory;
  onSelect: (category: StoreCategory) => void;
}

export function CategoryChips({ selectedCategory, onSelect }: CategoryChipsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex gap-2 overflow-x-auto pb-1"
    >
      {STORE_CATEGORIES.map((category) => (
        <Chip
          key={category}
          selected={selectedCategory === category}
          onClick={() => onSelect(category)}
          className="shrink-0"
        >
          {category}
        </Chip>
      ))}
    </motion.div>
  );
}
