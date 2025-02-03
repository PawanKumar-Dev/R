import './App.css'

function App() {
  let counter = 10

  const addValue = (counter) => {
    console.log("Plus pressed")
    return counter = counter + 1
  }

  const decValue = (counter) => {
    console.log("minus pressed")
    return counter = counter - 1
  }

  return (
    <>
      <h2>counter: {counter}</h2>

      <button onClick={addValue}>Add</button>
      <button onClick={decValue}>Decrease</button>
    </>
  )
}

export default App