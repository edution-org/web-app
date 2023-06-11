import { Dropdown as ReactDropdown } from '@edution-monorepo/react-ui'
import { qwikify$ } from '@builder.io/qwik-react'

export const Dropdown = qwikify$(ReactDropdown, { eagerness: 'hover' })
