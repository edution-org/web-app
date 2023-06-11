/** @jsxImportSource react */
import { Separator as SeparatorComponent } from '../primitives/separator'

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  attributes?: React.HTMLAttributes<HTMLElement>
}

export function Separator({ orientation, attributes }: SeparatorProps) {
  return (
    <SeparatorComponent
      orientation={orientation}
      {...attributes}
      className={attributes?.className}
    />
  )
}
