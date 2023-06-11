import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Avatar } from '@edution-monorepo/qwik-ui'

export const AvatarBuilder: RegisteredComponent = {
  component: Avatar,
  name: 'Avatar',
  inputs: [
    { name: 'imageUrl', type: 'file' },
    { name: 'alt', type: 'text', required: true },
    { name: 'fallback', type: 'text' },
  ],
  image: iconUriList.Avatar,
}
