import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { RadioGroup } from '@edution-monorepo/qwik-ui'

export const RadioGroupBuilder: RegisteredComponent = {
  component: RadioGroup,
  name: 'RadioGroup',
  inputs: [
    { name: 'defaultValue', type: 'string' },
    {
      name: 'options',
      type: 'list',
      subFields: [
        { name: 'value', type: 'string' },
        { name: 'id', type: 'string' },
        { name: 'label', type: 'string' },
        { name: 'disabled', type: 'boolean' },
      ],
    },
  ],
  image: iconUriList.RadioGroup,
}
