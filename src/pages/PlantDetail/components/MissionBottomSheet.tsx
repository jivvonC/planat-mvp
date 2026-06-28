import { AnimatePresence, motion } from "framer-motion";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/common/Typography";
import type { Mission } from "@/types";
import { SHEET_DURATION, fadeTransition } from "@/lib/motion";

interface MissionBottomSheetProps {
  open: boolean;
  mission?: Mission;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  onComplete: () => void;
  onClose: () => void;
}

export function MissionBottomSheet({
  open,
  mission,
  selectedOption,
  onSelectOption,
  onComplete,
  onClose,
}: MissionBottomSheetProps) {
  return (
    <AnimatePresence>
      {open && mission ? (
        <>
          <motion.button
            type="button"
            aria-label="닫기"
            className="fixed inset-0 z-50 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fadeTransition()}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="오늘의 관찰"
            className="fixed right-0 bottom-0 left-1/2 z-50 w-full max-w-[var(--width-mobile)] -translate-x-1/2 rounded-t-[var(--radius-sheet)] bg-white px-4 pt-5 pb-[calc(16px+env(safe-area-inset-bottom))]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: SHEET_DURATION, ease: "easeOut" }}
          >
            <Text variant="sectionTitle" as="h2">
              오늘의 관찰
            </Text>
            <Text variant="caption" muted className="mt-1 mb-4">
              {mission.description}
            </Text>

            <div className="flex flex-wrap gap-2">
              {mission.observationOptions.map((option) => (
                <Chip
                  key={option}
                  tone="light"
                  selected={selectedOption === option}
                  onClick={() => onSelectOption(option)}
                >
                  {option}
                </Chip>
              ))}
            </div>

            <Button
              fullWidth
              className="mt-6"
              disabled={!selectedOption}
              onClick={onComplete}
            >
              완료
            </Button>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
