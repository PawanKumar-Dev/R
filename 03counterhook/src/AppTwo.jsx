import { useState } from "react"
import "./App.css"

const AppTwo = () => {
  let [counter, setCounter] = useState(10)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const decValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h2>App Two</h2>

      <h3>Counter: {counter}</h3>

      <button onClick={addValue}>Add</button>
      <button onClick={decValue}>Minus</button>
    </>
  )
}

export default AppTwo