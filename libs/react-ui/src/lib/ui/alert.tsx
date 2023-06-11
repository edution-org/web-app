/** @jsxImportSource react */
import { PropsFrom } from '../utils/types'
import {
  Alert as AlertPrimitive,
  AlertDescription,
  AlertTitle,
} from '../primitives/alert'
import { Icon } from './icon'

interface AlertProps {
  title: string
  description: string
  iconName?: PropsFrom<typeof Icon>['name']
}

export function Alert({ title, description, iconName }: AlertProps) {
  return (
    <AlertPrimitive>
      {iconName && <Icon name={iconName} className="h-4 w-4" />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </AlertPrimitive>
  )
}
