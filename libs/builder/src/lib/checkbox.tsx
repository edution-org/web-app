import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Checkbox } from '@edution-monorepo/qwik-ui'

export const CheckboxBuilder: RegisteredComponent = {
  component: Checkbox,
  name: 'Checkbox',
  inputs: [
    { name: 'id', type: 'text' },
    { name: 'label', type: 'text' },
    { name: 'subtext', type: 'longText' },
    { name: 'disabled', type: 'boolean' },
  ],
  image: iconUriList.Checkbox,
}
