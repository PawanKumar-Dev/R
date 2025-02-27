import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Just some text",
            status: false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    statusUpdateTodo : (id) => {}
})

export const TodoProvider = TodoContext.Provider

export default function useTodo() {
  return useContext(TodoContext)
}