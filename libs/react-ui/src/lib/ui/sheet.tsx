/** @jsxImportSource react */
import {
  Sheet as SheetComponent,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../primitives/sheet'
import { Button } from '../primitives/button'
import { ReactNode } from 'react'

interface SheetProps {
  size?: 'sm' | 'lg' | 'xl' | 'full' | 'content'
  position?: 'top' | 'right' | 'bottom' | 'left'
  triggerText: string
  children: ReactNode
  title: string
  description: string
}

export function Sheet({
  size,
  position,
  triggerText,
  children,
  title,
  description,
}: SheetProps) {
  return (
    <SheetComponent>
      <SheetTrigger>
        <Button variant="outline">{triggerText}</Button>
      </SheetTrigger>
      <SheetContent size={size} position={position}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </SheetComponent>
  )
}
