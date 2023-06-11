import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { AspectRatio } from '@edution-monorepo/qwik-ui'

export const AspectRatioBuilder: RegisteredComponent = {
  component: AspectRatio,
  name: 'AspectRatio',
  canHaveChildren: true,
  inputs: [{ name: 'ratio', type: 'number', defaultValue: 16 / 9 }],
  image: iconUriList.AspectRatio,
}
