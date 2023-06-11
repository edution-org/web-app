/** @jsxImportSource react */
import { ReactNode } from 'react'
import {
  Card as CardPrimitive,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../primitives/card'

interface CardProps {
  title: string
  description: string
  children: ReactNode
  footer?: ReactNode
}

export function Card({ title, description, footer, children }: CardProps) {
  return (
    <CardPrimitive>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardPrimitive>
  )
}
