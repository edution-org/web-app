/** @jsxImportSource react */
import { Slider as SliderPrimitive } from '../primitives/slider'
import { Label } from '../primitives/label'

interface SliderProps {
  id: string
  label: string
  disabled?: boolean
  text?: string
  defaultValue?: number
  min?: number
  max?: number
  step?: number
}

export function Slider({
  defaultValue,
  min,
  max,
  step,
  label,
  id,
  text,
  disabled,
}: SliderProps) {
  const value = defaultValue ? [defaultValue] : undefined
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <SliderPrimitive
        id={id}
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        className="w-[60%]"
        disabled={disabled}
      />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  )
}
