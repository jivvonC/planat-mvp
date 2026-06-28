import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import {
  ENTER_Y,
  fadeInUpTransition,
  listStaggerDelay,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SummaryCardProps {
  emoji: string;
  title: string;
  count: number;
  to: string;
  index: number;
  className?: string;
}

export function SummaryCard({
  emoji,
  title,
  count,
  to,
  index,
  className,
}: SummaryCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: ENTER_Y.default }}
      animate={{ opacity: 1, y: 0 }}
      transition={fadeInUpTransition({ delay: listStaggerDelay(index, 0.1) })}
      className="w-full"
    >
      <Card
        role="button"
        tabIndex={0}
        className={cn(
          "flex cursor-pointer items-center gap-2 border-0 bg-[#49C1C1]/48 px-2.5 py-1.5 transition-transform active:scale-[0.98]",
          className,
        )}
        onClick={() => navigate(to)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            navigate(to);
          }
        }}
      >
        <span className="shrink-0 text-lg" aria-hidden="true">
          {emoji}
        </span>
        <Text
          variant="helper"
          muted
          className="min-w-0 flex-1 leading-tight text-white font-semibold text-[14px]"
        >
          {title}
        </Text>
        <Text
          variant="caption"
          as="p"
          className="shrink-0 font-normal leading-tight text-white text-[14px]"
        >
          {count}개
        </Text>
      </Card>
    </motion.div>
  );
}
