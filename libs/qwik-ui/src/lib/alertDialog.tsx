import { AlertDialog as ReactAlertDialog } from '@edution-monorepo/react-ui'
import { qwikify$ } from '@builder.io/qwik-react'

export const AlertDialog = qwikify$(ReactAlertDialog, { eagerness: 'hover' })
