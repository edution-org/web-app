import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Calendar } from '@edution-monorepo/qwik-ui'

export const CalendarBuilder: RegisteredComponent = {
  component: Calendar,
  name: 'Calendar',
  inputs: [{ name: 'date', type: 'date' }],
  image: iconUriList.Calendar,
}
