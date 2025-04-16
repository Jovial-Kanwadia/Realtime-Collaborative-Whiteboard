// app/ClientLayout.tsx
"use client";

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import ModalManager from "@/common/components/modal/components/ModalManager";
import { ModalProvider } from "./contexts/ModalContext";
import "react-toastify/dist/ReactToastify.css";

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <RecoilRoot>
            <ModalProvider>
                <ToastContainer />
                <ModalManager />
                {children}
            </ModalProvider>
        </RecoilRoot>
    );
}
