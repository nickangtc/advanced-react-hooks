// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, newState) {
  return {
    ...state,
    ...newState,
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () => setState({count: state.count + step})

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
