/** @jsxImportSource react */
import { Button } from '../primitives/button'
import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../primitives/dialog'

interface DialogProps {
  triggerText: string
  title: string
  description: string
  footer?: React.ReactNode
}

export function Dialog({
  triggerText,
  title,
  description,
  children,
  footer,
}: React.PropsWithChildren<DialogProps>) {
  return (
    <DialogPrimitive>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </DialogPrimitive>
  )
}
