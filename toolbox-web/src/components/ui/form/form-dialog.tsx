import { useModal } from "@/hooks/use-modal";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Button } from "../button";
import { useEffect } from "react";

export type FormDialogProps = {
  title: string;
  description?: string;
  triggerButton: React.ReactNode;
  submitButton: React.ReactNode;
  children: React.ReactNode;
  cancelButtonLabel?: string;
  isDone?: boolean;
};

export function FormDialog({
  title,
  description,
  triggerButton,
  submitButton,
  children,
  cancelButtonLabel = "Cancel",
  isDone = false,
}: FormDialogProps) {
  const { open, onOpenChange, closeModal } = useModal();

  useEffect(() => {
    if (isDone) {
      closeModal();
    }
  }, [isDone]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{cancelButtonLabel}</Button>
          </DialogClose>
          {submitButton}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
