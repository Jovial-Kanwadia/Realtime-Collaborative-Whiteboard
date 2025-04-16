import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModalContext, BaseModalProps } from "@/app/contexts/ModalContext";
import Portal from "@/common/components/portal/components/Portal";
import {
  bgAnimation,
  modalAnimation,
} from "@/common/components/modal/animations/ModalManager.animations";

export default function ModalManager() {
  const { isOpen, component: Component, props, closeModal } = useModalContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && Component && (
          <>
            <motion.div
              {...bgAnimation}
              className="fixed inset-0 z-50 bg-black/60"
              onClick={closeModal}
            />
            <motion.div
              {...modalAnimation}
              className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
            >
              <Component {...props as BaseModalProps} onClose={closeModal} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}

