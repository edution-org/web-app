/** @jsxImportSource react */
import { Label } from '../primitives/label'
import {
  RadioGroup as RadioGroupPrimitive,
  RadioGroupItem,
} from '../primitives/radio-group'
import { ExcludeFromTypeInference } from '../utils/types'

type RadioGroupOption = {
  value: string
  id: string
  label: string
}

interface RadioGroupProps<T extends RadioGroupOption = RadioGroupOption> {
  options: T[]
  defaultValue?: ExcludeFromTypeInference<T>['value']
  disabled?: boolean
}

export function RadioGroup<const T extends RadioGroupOption>({
  defaultValue,
  options,
  disabled,
}: RadioGroupProps<T>) {
  return (
    <RadioGroupPrimitive defaultValue={defaultValue} disabled={disabled}>
      {options.map((option) => (
        <div className="flex items-center space-x-2" key={option.id}>
          <RadioGroupItem value={option.value} id={option.id} />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </RadioGroupPrimitive>
  )
}
