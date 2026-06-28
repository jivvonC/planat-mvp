import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/common/Typography";
import { SHEET_DURATION, fadeTransition } from "@/lib/motion";

interface CalendarNoteSheetProps {
  open: boolean;
  onClose: () => void;
  onSave: (note: string) => void;
}

export function CalendarNoteSheet({
  open,
  onClose,
  onSave,
}: CalendarNoteSheetProps) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="닫기"
            className="fixed inset-0 z-[100] bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fadeTransition()}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="메모 작성"
            className="fixed right-0 bottom-0 left-1/2 z-[100] w-full max-w-[var(--width-mobile)] -translate-x-1/2 rounded-t-[var(--radius-sheet)] bg-white px-4 pt-5 pb-[calc(16px+env(safe-area-inset-bottom))]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: SHEET_DURATION, ease: "easeOut" }}
          >
            <Text variant="sectionTitle" as="h2">
              오늘의 메모
            </Text>
            <Text variant="caption" muted className="mt-1 mb-3">
              짧게 남겨도 충분해요.
            </Text>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const note = String(formData.get("note") ?? "").trim();
                if (note) {
                  onSave(note);
                }
              }}
            >
              <textarea
                name="note"
                rows={3}
                placeholder="식물과 함께한 순간을 적어보세요."
                className="w-full resize-none rounded-[var(--radius-input)] border border-border bg-planat-bg-neutral/50 px-3 py-2 text-[length:var(--text-body)] text-planat-text-primary outline-none focus:ring-2 focus:ring-planat-primary-light/40"
              />
              <Button type="submit" fullWidth className="mt-4">
                저장
              </Button>
            </form>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
