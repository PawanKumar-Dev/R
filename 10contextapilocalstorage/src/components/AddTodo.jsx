import React, { useState } from "react"

const AddTodo = ({ addTodo }) => {
  const [inputTodo, setInputTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    addTodo(inputTodo)
  }

  return (
    <>
      <div className="mt-10 max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Todo</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter a task..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={handleSubmit}
          >Add</button>
        </div>
      </div>
    </>
  )
}

export default AddTodo