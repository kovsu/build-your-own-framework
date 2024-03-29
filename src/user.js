import { createComponent } from '../framework'
import { div } from '../framework/element'
import { onClick } from '../framework/event'

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName }),
}

const initialState = { firstName: 'Marvin', lastName: 'Frachet' }

function template({ firstName, lastName, methods }) {
  return div`${onClick(() =>
    methods.changeName('Thomas'),
  )} Hello ${firstName} ${lastName}`
}

export const User = createComponent({ template, methods, initialState })
