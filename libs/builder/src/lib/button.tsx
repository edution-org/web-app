import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Button } from '@edution-monorepo/qwik-ui'

export const ButtonBuilder: RegisteredComponent = {
  component: Button,
  name: 'Button',
  canHaveChildren: true,
  inputs: [
    { name: 'children', type: 'text' },
    {
      name: 'variant',
      type: 'string',
    },
    { name: 'iconName', type: 'string' },
  ],
  image: iconUriList.Button,
}
