import { h } from 'snabbdom'

const initialState = {
  template: '',
  on: {},
}

function createReducer(args) {
  return (acc, currentString, index) => {
    const currentArg = args[index]

    if (currentArg && currentArg.type === 'event')
      return { ...acc, on: { click: currentArg.click } }

    return {
      ...acc,
      template: acc.template + currentString + (args[index] || ''),
    }
  }
}

function createElement(tagName) {
  return (strings, ...args) => {
    const { template, on } = strings.reduce(createReducer(args), initialState)

    return {
      type: 'element',
      template: h(tagName, { on }, template),
    }
  }
}

export const div = createElement('div')
export const p = createElement('p')
