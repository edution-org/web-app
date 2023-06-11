/** @jsxImportSource react */
import {
  AlertDialog as AlertDialogPrimitive,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../primitives/alert-dialog'
import { PropsFrom } from '../utils/types'
import { Button } from '../ui/button'

interface AlertDialogProps {
  triggerContent: string
  triggerBtnVariant: PropsFrom<typeof Button>['variant']
  title: string
  description: string
  cancelText: string
  actionText: string
  onCancel: () => void
  onAction: () => void
}

export function AlertDialog({
  triggerContent,
  triggerBtnVariant,
  title,
  description,
  cancelText,
  actionText,
  onCancel,
  onAction,
}: AlertDialogProps) {
  return (
    <AlertDialogPrimitive>
      <AlertDialogTrigger asChild>
        <Button variant={triggerBtnVariant}>{triggerContent}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogPrimitive>
  )
}
