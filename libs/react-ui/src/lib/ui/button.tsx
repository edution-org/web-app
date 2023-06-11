/** @jsxImportSource react */
import { Button as ButtonPrimitive } from '../primitives/button'
import { PropsFrom } from '../utils/types'
import { ReactNode } from 'react'
import { Icon } from './icon'

interface ButtonProps {
  children: ReactNode
  variant?: PropsFrom<typeof ButtonPrimitive>['variant']
  iconName?: PropsFrom<typeof Icon>['name']
  asChild?: boolean
}

export function Button({ children, variant, iconName }: ButtonProps) {
  return (
    <ButtonPrimitive variant={variant}>
      {iconName && <Icon name={iconName} className="h-4 w-4" />}
      {children}
    </ButtonPrimitive>
  )
}
