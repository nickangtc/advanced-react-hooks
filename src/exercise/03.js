// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

function CountDisplay() {
  const [count] = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = React.useContext(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function CountProvider({...props}) {
  const [count, setCount] = React.useState(0)
  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  )
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
