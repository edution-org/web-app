import { Button as ReactButton } from '@edution-monorepo/react-ui'
import { qwikify$ } from '@builder.io/qwik-react'

export const Button = qwikify$(ReactButton, { eagerness: 'hover' })
