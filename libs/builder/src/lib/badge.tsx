import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Badge } from '@edution-monorepo/qwik-ui'

export const BadgeBuilder: RegisteredComponent = {
  component: Badge,
  name: 'Badge',
  inputs: [
    { name: 'children', type: 'text' },
    { name: 'variant', type: 'string' },
  ],
  image: iconUriList.Badge,
}
