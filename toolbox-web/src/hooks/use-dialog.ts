import { useState } from "react";

export const useDialog = () => {
  const [open, setOpen] = useState<boolean>(false);

  function openDialog() {
    setOpen(() => true);
  }

  function closeDialog() {
    setOpen(() => false);
  }

  return {
    open: open,
    openDialog: openDialog,
    closeDialog: closeDialog,
    onOpenChange: setOpen,
  };
};
