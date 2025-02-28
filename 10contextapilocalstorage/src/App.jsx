import { useState } from "react"
import "./App.css"
import { TodoContext, TodoProvider } from "./context/TodoContext"
import AddTodo from "./components/AddTodo"

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos, { id: Date.now(), todo: todo, status: false }])
  }

  function updateTodo(todo, id) {
    setTodos([...todos, { id: id, todo: todo, status: false }])
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((item) => id !== item.id);
    setTodos(newTodos)
  }

  function statusUpdateTodo() { }

  return (
    <>
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, statusUpdateTodo }} >
        <AddTodo />
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
          <ul className="space-y-3">
            {todos.map((todo) => {
              return (
                <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow" key={todo.id}>
                  <span className="text-gray-800">📝 {todo.todo}</span>
                  <button className="text-red-500 hover:text-red-700" onClick={() => deleteTodo(todo.id)}>✖</button>
                </li>
              )
            })}
          </ul>
        </div>
      </TodoProvider>
    </>
  )
}

export default App