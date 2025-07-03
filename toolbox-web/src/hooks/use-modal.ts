import { useState } from "react";

export const useModal = (defaultValue: boolean = false) => {
  const [open, setOpen] = useState<boolean>(defaultValue);

  function openModal() {
    setOpen(() => true);
  }

  function closeModal() {
    setOpen(() => false);
  }

  return {
    open: open,
    openModal: openModal,
    closeModal: closeModal,
    onOpenChange: setOpen,
  };
};
