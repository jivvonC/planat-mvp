import { motion } from "framer-motion";
import { Text } from "@/components/common/Typography";

interface ObservationsSectionProps {
  observations: string[];
}

export function ObservationsSection({
  observations,
}: ObservationsSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <Text
        variant="sectionTitle"
        as="h2"
        className="text-white font-semibold text-[18px]"
      >
        이번 진단은 이런 관찰을 바탕으로 했어요
      </Text>
      <ul className="flex flex-col gap-2">
        {observations.map((observation, index) => (
          <motion.li
            key={observation}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="flex items-start gap-2 rounded-[var(--radius-input)] bg-[#49C1C1]/38 px-4 py-3 shadow-[var(--shadow-soft)]"
          >
            <span className="text-planat-green" aria-hidden="true">
              ✓
            </span>
            <Text
              variant="body"
              className="text-white/80 font-semibold text-[14px]"
            >
              {observation}
            </Text>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
