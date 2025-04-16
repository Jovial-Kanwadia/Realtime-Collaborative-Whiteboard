// common/components/modal/components/ModalManager.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "@/app/providers";
import Portal from "@/common/components/portal/components/Portal";
import {
  bgAnimation,
  modalAnimation,
} from "@/common/components/modal/animations/ModalManager.animations";

const ModalManager = () => {
  const { opened, modal, closeModal } = useModal();
  const [portalNode, setPortalNode] = useState<HTMLElement>();

  useEffect(() => {
    if (!portalNode) {
      const node = document.getElementById("portal");
      if (node) setPortalNode(node);
      return;
    }

    if (opened) {
      portalNode.style.pointerEvents = "all";
    } else {
      portalNode.style.pointerEvents = "none";
    }
  }, [opened, portalNode]);

  return (
    <Portal>
      <motion.div
        className="absolute z-40 flex min-h-full w-full items-center justify-center bg-black/80"
        onClick={closeModal}
        variants={bgAnimation}
        initial="closed"
        animate={opened ? "opened" : "closed"}
      >
        <AnimatePresence>
          {opened && (
            <motion.div
              variants={modalAnimation}
              initial="closed"
              animate="opened"
              exit="exited"
              onClick={(e) => e.stopPropagation()}
              className="p-6"
            >
              {modal}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Portal>
  );
};

export default ModalManager;