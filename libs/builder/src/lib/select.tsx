import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Select } from '@edution-monorepo/qwik-ui'

export const SelectBuilder: RegisteredComponent = {
  component: Select,
  name: 'Select',
  inputs: [
    { name: 'placeholder', type: 'string' },
    { name: 'label', type: 'string' },
    { name: 'disabled', type: 'boolean' },
    { name: 'defaultValue', type: 'string' },
    {
      name: 'options',
      type: 'list',
      subFields: [
        { name: 'value', type: 'string' },
        { name: 'label', type: 'string' },
      ],
    },
  ],
  image: iconUriList.Select,
}
