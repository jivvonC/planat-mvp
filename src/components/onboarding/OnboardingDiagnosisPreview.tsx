import { motion } from "framer-motion";
import monsteraDiagnosisPhoto from "@/assets/images/ai/diagnosis/monstera/monsteraturncolor.png";
import starIcon from "@/assets/images/illustrations/staricon.png";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OnboardingDiagnosisPreviewProps {
  className?: string;
}

function ViewfinderCorner({ className }: { className: string }) {
  return (
    <span
      className={cn("absolute h-5 w-5 border-white/85", className)}
      aria-hidden="true"
    />
  );
}

export function OnboardingDiagnosisPreview({
  className,
}: OnboardingDiagnosisPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn("flex justify-center", className)}
      aria-hidden="true"
    >
      <Card className="w-full max-w-[220px] border-0 bg-white/25 p-3 shadow-[var(--shadow-soft)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-input)] bg-white/20">
          <img
            src={monsteraDiagnosisPhoto}
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />

          <div className="pointer-events-none absolute inset-3">
            <ViewfinderCorner className="top-0 left-0 border-t-2 border-l-2 rounded-tl-sm" />
            <ViewfinderCorner className="top-0 right-0 border-t-2 border-r-2 rounded-tr-sm" />
            <ViewfinderCorner className="bottom-0 left-0 border-b-2 border-l-2 rounded-bl-sm" />
            <ViewfinderCorner className="right-0 bottom-0 border-r-2 border-b-2 rounded-br-sm" />
          </div>

          <motion.div
            className="absolute inset-x-2 h-0.5 rounded-full bg-planat-primary-light shadow-[0_0_10px_rgba(73,193,193,0.9)]"
            animate={{ top: ["12%", "88%", "12%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-planat-primary-dark/90 px-2.5 py-1">
            <img
              src={starIcon}
              alt=""
              className="h-3 w-3 object-contain"
              draggable={false}
              aria-hidden="true"
            />
            <Text
              variant="helper"
              as="span"
              className="font-semibold text-white text-[10px]"
            >
              AI 진단
            </Text>
          </div>
        </div>

        <div className="mt-2.5 rounded-[var(--radius-button)] bg-white/30 px-3 py-2 text-center">
          <Text
            variant="helper"
            as="p"
            className="font-medium text-gray-500 text-[12px] leading-snug"
          >
            잎 색 변화 · 과습 의심
          </Text>
        </div>
      </Card>
    </motion.div>
  );
}
