import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Collapsible } from '@edution-monorepo/qwik-ui'

export const CollapsibleBuilder: RegisteredComponent = {
  component: Collapsible,
  name: 'Collapsible',
  canHaveChildren: true,
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'shownContent', type: 'text' },
    { name: 'children', type: 'longText' },
  ],
  image: iconUriList.Collapsible,
}
