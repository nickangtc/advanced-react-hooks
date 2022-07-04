// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  if (typeof action === 'object') {
    return {
      ...state,
      ...action,
    }
  } else if (typeof action === 'function') {
    return {
      ...state,
      ...action(state),
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () => setState(state => ({count: state.count + step}))

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
