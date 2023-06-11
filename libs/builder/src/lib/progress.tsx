import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Progress } from '@edution-monorepo/qwik-ui'

export const ProgressBuilder: RegisteredComponent = {
  component: Progress,
  name: 'Progress',
  inputs: [{ name: 'value', type: 'number' }],
  image: iconUriList.Progress,
}
