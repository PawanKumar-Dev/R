import { useState } from "react"
import "./App.css"
import { TodoContext, TodoProvider } from "./context/TodoContext"
import AddTodo from "./components/AddTodo"

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos, { id: Date.now(), todo: todo, status: false }])
  }

  function updateTodo() { }

  function deleteTodo() { }

  function statusUpdateTodo() { }

  console.log(todos)

  return (
    <>
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, statusUpdateTodo }} >
        <AddTodo addTodo={addTodo} />
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
          <ul className="space-y-3">
            <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow">
              <span className="text-gray-800">📝 Complete Tailwind UI</span>
              <button className="text-red-500 hover:text-red-700">✖</button>
            </li>
            <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow">
              <span className="text-gray-800">📝 Buy groceries</span>
              <button className="text-red-500 hover:text-red-700">✖</button>
            </li>
            <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow">
              <span className="text-gray-800">📝 Read JavaScript book</span>
              <button className="text-red-500 hover:text-red-700">✖</button>
            </li>
          </ul>
        </div>
      </TodoProvider>
    </>
  )
}

export default App