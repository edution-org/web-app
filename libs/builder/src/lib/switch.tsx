import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Switch } from '@edution-monorepo/qwik-ui'

export const SwitchBuilder: RegisteredComponent = {
  component: Switch,
  name: 'Switch',
  inputs: [
    { name: 'label', type: 'string' },
    { name: 'subtext', type: 'string' },
    { name: 'id', type: 'string' },
    { name: 'disabled', type: 'boolean' },
  ],
  image: iconUriList.Switch,
}
