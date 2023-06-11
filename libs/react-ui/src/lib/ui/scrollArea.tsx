/** @jsxImportSource react */
import { ScrollArea as ScrollAreaComponent } from '../primitives/scroll-area'

interface ScrollAreaProps {
  children: React.ReactNode
  attributes?: Omit<React.HTMLAttributes<HTMLDivElement>, 'dir'>
}

export function ScrollArea({ children, attributes }: ScrollAreaProps) {
  return (
    <ScrollAreaComponent
      {...attributes}
      className={`rounded-md border ${attributes?.className}`}
    >
      {children}
    </ScrollAreaComponent>
  )
}
