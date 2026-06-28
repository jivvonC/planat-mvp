import { motion } from "framer-motion";
import { Text } from "@/components/common/Typography";

interface TodayMessageProps {
  emoji: string;
  message: string;
}

export function TodayMessage({ emoji, message }: TodayMessageProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex items-center gap-3 rounded-[var(--radius-card)] bg-[#49C1C1]/28 px-3.5 py-3 shadow-[var(--shadow-soft)]"
    >
      <span className="shrink-0 text-lg leading-none" aria-hidden="true">
        {emoji}
      </span>
      <Text
        variant="caption"
        as="p"
        className="min-w-0 whitespace-nowrap leading-snug text-white font-semibold text-[14px]"
      >
        {message}
      </Text>
    </motion.section>
  );
}
