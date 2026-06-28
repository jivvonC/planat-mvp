import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/common/Typography";

interface DiagnosisSummaryProps {
  title: string;
  reassurance: string;
}

export function DiagnosisSummary({
  title,
  reassurance,
}: DiagnosisSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="flex flex-col items-center gap-3 px-6 py-8 text-center bg-white/40 shadow-[var(--shadow-card)]">
        <span className="text-4xl" aria-hidden="true">
          🌿
        </span>
        <Text
          variant="pageTitle"
          as="h2"
          className="leading-snug text-planat-text-primary/90 font-semibold text-[20px]"
        >
          {title}
        </Text>
        <Text
          variant="body"
          muted
          className="leading-relaxed text-white/80 font-medium text-[14px]"
        >
          &ldquo;{reassurance}&rdquo;
        </Text>
      </Card>
    </motion.div>
  );
}
