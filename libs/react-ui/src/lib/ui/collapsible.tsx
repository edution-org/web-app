/** @jsxImportSource react */
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '../primitives/button'
import {
  Collapsible as CollapsiblePrimitive,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../primitives/collapsible'
import { useState } from 'react'

interface CollapsibleProps {
  title: string
  shownContent?: string
}

export function Collapsible({
  title,
  shownContent,
  children,
}: React.PropsWithChildren<CollapsibleProps>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CollapsiblePrimitive
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {shownContent && (
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          {shownContent}
        </div>
      )}
      <CollapsibleContent className="space-y-2">{children}</CollapsibleContent>
    </CollapsiblePrimitive>
  )
}
