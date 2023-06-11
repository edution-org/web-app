import { RadioGroup as ReactRadioGroup } from '@edution-monorepo/react-ui'
import { qwikify$ } from '@builder.io/qwik-react'

export const RadioGroup = qwikify$(ReactRadioGroup, { eagerness: 'hover' })
