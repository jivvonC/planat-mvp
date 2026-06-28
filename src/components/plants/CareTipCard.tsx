import { motion } from "framer-motion";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import type { CareTip } from "@/types";
import { ENTER_Y, fadeInUpTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface CareTipCardProps {
  tip: CareTip;
  className?: string;
}

export function CareTipCard({ tip, className }: CareTipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: ENTER_Y.subtle }}
      animate={{ opacity: 1, y: 0 }}
      transition={fadeInUpTransition()}
    >
      <Card
        className={cn(
          "flex flex-col gap-1.5 border-0 bg-[#49C1C1]/48 p-3",
          className,
        )}
      >
        <Text
          variant="caption"
          weight="medium"
          as="p"
          className="text-white font-semibold text-[14px]"
        >
          오늘의 팁
        </Text>
        <Text
          variant="caption"
          as="p"
          className="line-clamp-2 leading-snug text-white"
        >
          {tip.description}
        </Text>
      </Card>
    </motion.div>
  );
}
