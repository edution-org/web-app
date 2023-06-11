/** @jsxImportSource react */
import { Checkbox as CheckboxPrimitive } from '../primitives/checkbox'
import { Label } from '../primitives/label'

interface CheckboxProps {
  id: string
  label: string
  disabled?: boolean
  subtext?: string
}

export function Checkbox({ id, label, subtext, disabled }: CheckboxProps) {
  return (
    <div className="items-top flex space-x-2">
      <CheckboxPrimitive id={id} disabled={disabled} />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor={id}>{label}</Label>
        {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
      </div>
    </div>
  )
}
