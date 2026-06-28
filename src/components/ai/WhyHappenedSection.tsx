import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/common/Typography";

interface WhyHappenedSectionProps {
  paragraphs: string[];
}

export function WhyHappenedSection({ paragraphs }: WhyHappenedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
      className="flex flex-col gap-3"
    >
      <Text
        variant="sectionTitle"
        as="h2"
        className="text-white font-semibold text-[18px]"
      >
        왜 이런 일이 생겼을까요?
      </Text>
      <Card className="flex flex-col gap-3 p-4 bg-[#49C1C1]/38 shadow-[var(--shadow-card)]">
        {paragraphs.map((paragraph) => (
          <Text
            key={paragraph}
            variant="body"
            className="leading-relaxed text-white/80 font-medium text-[14px]"
          >
            {paragraph}
          </Text>
        ))}
      </Card>
    </motion.section>
  );
}
