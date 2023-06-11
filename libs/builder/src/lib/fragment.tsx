import { Slot, component$ } from '@builder.io/qwik'
import { RegisteredComponent } from '@builder.io/sdk-qwik'

export const Fragment = component$(() => {
  return <Slot />
})

export const FragmentBuilder: RegisteredComponent = {
  component: Fragment,
  name: 'Core:Fragment',

  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Hello world',
    },
  ],
}
