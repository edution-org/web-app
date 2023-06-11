/** @jsxImportSource react */
import { Label } from '../primitives/label'
import { Switch as SwitchPrimitive } from '../primitives/switch'

interface SwitchProps {
  label: string
  id: string
  subtext?: string
  disabled?: boolean
}

export function Switch({ label, subtext, id, disabled }: SwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <SwitchPrimitive id={id} disabled={disabled} />
      <div className="grid gap-1.5 leading-none">
        {label && <Label htmlFor={id}>{label}</Label>}
        {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
      </div>
    </div>
  )
}
