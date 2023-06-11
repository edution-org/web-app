import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { AlertDialog } from '@edution-monorepo/qwik-ui'

export const AlertDialogBuilder: RegisteredComponent = {
  component: AlertDialog,
  name: 'AlertDialog',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'iconName', type: 'text' },
  ],
  image: iconUriList.AlertDialog,
}
