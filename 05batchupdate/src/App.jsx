import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const upCounter = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  const upCounterTwo = () => {
    setCount((prevcount)=>prevcount + 1)
    setCount((prevcount)=>prevcount + 1)
    setCount((prevcount)=>prevcount + 1)
    setCount((prevcount)=>prevcount + 1)
  }

  return (
    <>
      <h3>Counter {count}</h3>
      <div className="card">
        <button onClick={upCounter}>Add</button>

        <button onClick={upCounterTwo}>Add Two</button>
      </div>
    </>
  );
}

export default App
