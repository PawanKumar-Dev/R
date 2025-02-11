import './App.css'
import Header from './components/Header'
import { Outlet } from "react-router";


function App() {
  return (
    <>
      <Header />
      <h2>Homepage</h2>
      <Outlet />
    </>
  )
}

export default App
