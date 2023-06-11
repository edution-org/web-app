/** @jsxImportSource react */
import { AspectRatio as AspectRatioPrimitive } from '../primitives/aspect-ratio'
import { ReactNode } from 'react'

interface AspectRatioProps {
  ratio: number
  children: ReactNode
}

export function AspectRatio({ ratio, children }: AspectRatioProps) {
  return (
    <AspectRatioPrimitive ratio={ratio} className="bg-muted overflow-hidden">
      {children}
    </AspectRatioPrimitive>
  )
}
