import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Input } from '@edution-monorepo/qwik-ui'

export const InputBuilder: RegisteredComponent = {
  component: Input,
  name: 'Input',
  inputs: [
    { name: 'label', type: 'text' },
    { name: 'placeholder', type: 'text' },
    { name: 'type', type: 'text' },
    { name: 'id', type: 'text' },
    { name: 'text', type: 'text' },
    { name: 'disabled', type: 'boolean' },
  ],
  image: iconUriList.Input,
}
