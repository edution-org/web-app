/** @jsxImportSource react */
import * as icons from 'lucide-react'

type IconProps = {
  name: keyof typeof icons
  color?: string
  size?: number
  className?: string
}

export function Icon({ name, color, size, className }: IconProps) {
  const LucideIcon: any = icons[name]
  if (!LucideIcon) return null

  return <LucideIcon color={color} size={size} className={className} />
}
