"use client"
import { ReactNode } from 'react';
import { ModalProvider } from './contexts/ModalContext';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  );
}
