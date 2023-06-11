import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Separator } from '@edution-monorepo/qwik-ui'

export const SeparatorBuilder: RegisteredComponent = {
  component: Separator,
  name: 'Separator',
  noWrap: true,
  inputs: [
    {
      name: 'orientation',
      type: 'string',
      enum: ['horizontal', 'vertical'],
    },
  ],
  image: iconUriList.Separator,
}
