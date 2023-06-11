/** @jsxImportSource react */
import {
  Avatar as AvatarPrimitive,
  AvatarFallback,
  AvatarImage,
} from '../primitives/avatar'
import { ReactNode } from 'react'

interface AvatarProps {
  imageUrl: string
  alt: string
  fallback: ReactNode
}

export function Avatar({ imageUrl, alt, fallback }: AvatarProps) {
  return (
    <AvatarPrimitive>
      <AvatarImage src={imageUrl} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarPrimitive>
  )
}
