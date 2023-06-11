import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Sheet } from '@edution-monorepo/qwik-ui'

export const SheetBuilder: RegisteredComponent = {
  component: Sheet,
  name: 'Sheet',
  canHaveChildren: true,
  inputs: [
    { name: 'triggerText', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'children', type: 'longText' },
    { name: 'size', type: 'text' },
    { name: 'position', type: 'text' },
  ],
  image: iconUriList.Sheet,
}
