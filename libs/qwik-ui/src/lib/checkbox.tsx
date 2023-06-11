import { Checkbox as ReactCheckbox } from '@edution-monorepo/react-ui'
import { qwikify$ } from '@builder.io/qwik-react'

export const Checkbox = qwikify$(ReactCheckbox, { eagerness: 'hover' })
