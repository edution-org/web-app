import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Card } from '@edution-monorepo/qwik-ui'

export const CardBuilder: RegisteredComponent = {
  component: Card,
  name: 'Card',
  canHaveChildren: true,
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'footer', type: 'text' },
    { name: 'children', type: 'longText' },
  ],
  image: iconUriList.Card,
}
