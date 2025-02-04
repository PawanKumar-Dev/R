import './App.css'
import Card from "./Card.jsx"

function App() {

  return (
    <>
      <h2>Card Here:</h2>
      <Card string="Data in props" age={15} />
    </>
  )
}

export default App