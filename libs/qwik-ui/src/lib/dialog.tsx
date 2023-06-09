import { Dialog as ReactDialog } from '@edution-monorepo/react-ui'
import { qwikify$ } from '@builder.io/qwik-react'

export const Dialog = qwikify$(ReactDialog, { eagerness: 'hover' })
