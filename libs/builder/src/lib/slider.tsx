import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Slider } from '@edution-monorepo/qwik-ui'

export const SliderBuilder: RegisteredComponent = {
  component: Slider,
  name: 'Slider',
  inputs: [
    { name: 'defaultValue', type: 'number' },
    { name: 'id', type: 'string' },
    { name: 'min', type: 'number' },
    { name: 'max', type: 'number' },
    { name: 'step', type: 'number' },
    { name: 'label', type: 'string' },
    { name: 'text', type: 'string' },
    { name: 'disabled', type: 'boolean' },
  ],
  image: iconUriList.Slider,
}
