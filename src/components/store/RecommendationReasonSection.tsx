import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { Text } from "@/components/common/Typography";

interface RecommendationReasonSectionProps {
  headline?: string;
  reasons: string[];
}

export function RecommendationReasonSection({
  headline,
  reasons,
}: RecommendationReasonSectionProps) {
  const visibleReasons = reasons.filter(Boolean);
  if (visibleReasons.length === 0) {
    return null;
  }

  return (
    <Section title="이런 식물에게 잘 어울려요.">
      {headline ? (
        <Text variant="caption" className="mb-2 text-planat-primary-dark">
          {headline}
        </Text>
      ) : null}
      <div className="flex flex-col gap-2">
        {visibleReasons.map((reason, index) => (
          <motion.div
            key={`${reason}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            className="rounded-[var(--radius-card)] bg-white/85 px-4 py-3 shadow-[var(--shadow-soft)]"
          >
            <Text variant="body">{reason}</Text>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
