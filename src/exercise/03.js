// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
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

function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be used within CountProvider')
  }
  return context
}

function App() {
  return (
    <div>
      <CountProvider>
        {/* move any of these out of CountProvider and open console to see error message */}
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
