"use client";

import { createContext, useState, ReactNode, useContext, JSX } from 'react';

// Define the modal context type with JSX.Element instead of React.ReactNode
type ModalContextType = {
    opened: boolean;
    modal: JSX.Element; // Changed from React.ReactNode
    openModal: (content: JSX.Element) => void; // Also update parameter type
    closeModal: () => void;
};

// Create context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider component
export function ModalProvider({ children }: { children: ReactNode }) {
    const [modalState, setModalState] = useState({
        opened: false,
        modal: <></>, // This is a JSX.Element
    });

    const openModal = (content: JSX.Element) => { // Update parameter type
        setModalState({
            opened: true,
            modal: content,
        });
    };

    const closeModal = () => {
        setModalState({
            opened: false,
            modal: <></>,
        });
    };

    return (
        <ModalContext.Provider
            value={{
                ...modalState,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

// Hook for consuming context
export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}