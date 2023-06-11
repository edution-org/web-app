import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Dialog } from '@edution-monorepo/qwik-ui'

export const DialogBuilder: RegisteredComponent = {
  component: Dialog,
  name: 'Dialog',
  inputs: [
    { name: 'triggerText', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'footer', type: 'text' },
  ],
  image: iconUriList.Dialog,
}
