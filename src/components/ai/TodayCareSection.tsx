import { motion } from "framer-motion";
import { Text } from "@/components/common/Typography";

interface TodayCareSectionProps {
  actions: string[];
}

export function TodayCareSection({ actions }: TodayCareSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <Text
        variant="sectionTitle"
        as="h2"
        className="text-white font-semibold text-[18px]"
      >
        오늘 이렇게 해보세요
      </Text>
      <ul className="flex flex-col gap-2">
        {actions.map((action, index) => (
          <motion.li
            key={action}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.2 + index * 0.08,
              ease: "easeOut",
            }}
            className="flex items-start gap-2 rounded-[var(--radius-input)] bg-[#49C1C1]/38 px-4 py-3 shadow-[var(--shadow-soft)]"
          >
            <span className="text-planat-green" aria-hidden="true">
              ✔
            </span>
            <Text
              variant="body"
              className="text-white/80 font-semibold text-[14px]"
            >
              {action}
            </Text>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
