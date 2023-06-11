import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Icon } from '@edution-monorepo/qwik-ui'

export const IconBuilder: RegisteredComponent = {
  component: Icon,
  name: 'Icon',
  docsLink: 'https://lucide.dev/icons',
  inputs: [
    { name: 'name', type: 'text' },
    { name: 'color', type: 'string' },
    { name: 'size', type: 'number' },
  ],
  image: iconUriList.Icon,
}
