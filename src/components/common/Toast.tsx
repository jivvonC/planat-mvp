import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { TOAST_DURATION_MS, useUIStore } from "@/store/uiStore";
import { Text } from "@/components/common/Typography";

export function Toast() {
  const toast = useUIStore((state) => state.toast);
  const hideToast = useUIStore((state) => state.hideToast);

  useEffect(() => {
    if (!toast?.visible) {
      return;
    }

    const timer = window.setTimeout(() => {
      hideToast();
    }, TOAST_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [toast, hideToast]);

  return (
    <AnimatePresence>
      {toast?.visible ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="pointer-events-none fixed bottom-24 left-1/2 z-50 w-max max-w-[calc(100vw-32px)] -translate-x-1/2 rounded-[var(--radius-card)] bg-planat-text-primary px-4 py-3 shadow-[var(--shadow-card)]"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        >
          <Text variant="caption" className="whitespace-nowrap text-center text-white">
            {toast.message}
          </Text>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
