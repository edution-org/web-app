import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Dropdown } from '@edution-monorepo/qwik-ui'

export const DropdownBuilder: RegisteredComponent = {
  component: Dropdown,
  name: 'Dropdown',
  canHaveChildren: true,
  inputs: [
    { name: 'iconName', type: 'text' },
    { name: 'triggerText', type: 'text' },
    { name: 'label', type: 'text' },
    { name: 'children', type: 'longText' },
  ],
  image: iconUriList.DropdownMenu,
}
