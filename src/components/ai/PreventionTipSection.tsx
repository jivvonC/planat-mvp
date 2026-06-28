import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/common/Typography";

interface PreventionTipSectionProps {
  tip: string;
}

export function PreventionTipSection({ tip }: PreventionTipSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-3"
    >
      <Text
        variant="sectionTitle"
        as="h2"
        className="text-white font-semibold text-[18px]"
      >
        앞으로는 이렇게 관찰해보세요.
      </Text>
      <Card className="p-4 bg-[#49C1C1]/38 shadow-[var(--shadow-card)]">
        <Text
          variant="body"
          className="leading-relaxed text-white/80 font-semibold text-[14px]"
        >
          {tip}
        </Text>
      </Card>
    </motion.section>
  );
}
