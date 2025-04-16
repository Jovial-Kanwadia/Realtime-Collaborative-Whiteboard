"use client";
import { createContext, useContext, ReactNode, useState, ComponentType } from 'react';

// Define base props that all modals should accept
interface BaseModalProps {
  onClose?: () => void;
}

// Type for the modal context
type ModalContextType = {
  isOpen: boolean;
  component: ComponentType<BaseModalProps> | null;
  props: Record<string, unknown>;
  openModal: <T extends BaseModalProps>(
    component: ComponentType<T>,
    props?: Omit<T, keyof BaseModalProps>
  ) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  component: null,
  props: {},
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [component, setComponent] = useState<ComponentType<BaseModalProps> | null>(null);
    const [props, setProps] = useState<Record<string, unknown>>({});

    const openModal = <T extends BaseModalProps>(
      modalComponent: ComponentType<T>,
      modalProps: Omit<T, keyof BaseModalProps> = {} as Omit<T, keyof BaseModalProps>
    ) => {
        setComponent(() => modalComponent as ComponentType<BaseModalProps>);
        setProps(modalProps);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setComponent(null);
        setProps({});
    };

    return (
        <ModalContext.Provider value={{
            isOpen,
            component,
            props,
            openModal,
            closeModal,
        }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModalContext = () => useContext(ModalContext);

// Export the base props type for use in modal components
export type { BaseModalProps };

