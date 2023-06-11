import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Alert } from '@edution-monorepo/qwik-ui'

export const AlertBuilder: RegisteredComponent = {
  component: Alert,
  name: 'Alert',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'iconName', type: 'text' },
  ],
  image: iconUriList.Alert,
}
