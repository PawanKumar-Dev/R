import { useState } from "react"
import "./App.css"
import { TodoContext, TodoProvider } from "./context/TodoContext"
import AddTodo from "./components/AddTodo"

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos, { id: Date.now(), todo: todo, status: false }])
  }

  function editTodo() {
    
  }

  function updateTodo(todo, id) {
    setTodos([...todos, { id: id, todo: todo, status: false }])
    console.log("update finished")
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((item) => id !== item.id);
    setTodos(newTodos)
  }

  function statusUpdateTodo(id) {
    let newTodos = todos.map((item) => {
      if (id === item.id) {
        return { ...item, status: !item.status }
      } else {
        return item
      }
    })
    setTodos(newTodos)
  }

  return (
    <>
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, statusUpdateTodo }} >
        <AddTodo />
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
          <ul className="space-y-3">
            {todos.map((todo) => {
              return (
                <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow" key={todo.id}>
                  <input type="checkbox" className="w-5 h-5 text-blue-500 rounded" onChange={() => statusUpdateTodo(todo.id)} />
                  <span className={todo.status ? "text-gray-800 line-through" : "text-gray-800"} onClick={editTodo}>📝 {todo.todo}</span>
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