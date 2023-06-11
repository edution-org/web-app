/** @jsxImportSource react */
import { Input as InputPrimitive } from '../primitives/input'
import { Label } from '../primitives/label'

interface InputProps {
  label: string
  placeholder: string
  type: string
  id: string
  text?: string
  disabled?: boolean
}

export function Input({
  label,
  placeholder,
  type,
  id,
  text,
  disabled,
}: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <InputPrimitive
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
      />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  )
}
