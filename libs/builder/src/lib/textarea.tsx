import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Textarea } from '@edution-monorepo/qwik-ui'

export const TextareaBuilder: RegisteredComponent = {
  component: Textarea,
  name: 'Textarea',
  inputs: [
    { name: 'id', type: 'string' },
    { name: 'label', type: 'string' },
    { name: 'placeholder', type: 'string' },
    { name: 'text', type: 'string' },
  ],
  image: iconUriList.Textarea,
}
