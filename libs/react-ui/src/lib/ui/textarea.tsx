/** @jsxImportSource react */
import { Textarea as TextareaPrimitive } from '../primitives/textarea'
import { Label } from '../primitives/label'

interface TextareaWithTextProps {
  id: string
  label: string
  placeholder: string
  text?: string
}

export function Textarea({
  id,
  label,
  placeholder,
  text,
}: TextareaWithTextProps) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <TextareaPrimitive placeholder={placeholder} id={id} />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  )
}
