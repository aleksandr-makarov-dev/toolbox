import { useDialog } from "@/hooks/use-dialog";
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
  triggerButton: React.ReactNode;
  submitButton: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
  done?: boolean;
};

export function FormDialog({
  title,
  description,
  submitButton,
  triggerButton,
  children,
  done,
}: FormDialogProps) {
  const { open, onOpenChange, closeDialog } = useDialog();

  useEffect(() => {
    if (done) {
      closeDialog();
    }
  }, [done]);

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
            <Button variant="outline">Отмена</Button>
          </DialogClose>
          {submitButton}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
