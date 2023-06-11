import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { ScrollArea } from '@edution-monorepo/qwik-ui'

export const ScrollAreaBuilder: RegisteredComponent = {
  component: ScrollArea,
  name: 'ScrollArea',
  noWrap: true,
  canHaveChildren: true,
  inputs: [{ name: 'children', type: 'longText' }],
  image: iconUriList.ScrollArea,
}
