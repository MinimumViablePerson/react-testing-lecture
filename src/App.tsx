import { useState } from 'react'
import './App.css'

export function greet (name: string) {
  return `Hello, ${name}!`
}

function App () {
  const [count, setCount] = useState(0)

  function up () {
    setCount(count + 1)
  }

  function down () {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='App'>
      <h1 data-testid='display'>{count}</h1>
      <button onClick={() => down()}>-</button>
      <button onClick={() => up()}>+</button>
    </div>
  )
}

export default App
