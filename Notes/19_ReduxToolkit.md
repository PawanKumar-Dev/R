# Redux Toolkit

- Traditional Redux code can be verbose and complex.

- Redux Toolkit simplifies Redux. It features 4 main concept:
  - store: where we place our data that is to be shared.
  - reducers: functions that access and edit this stored data. This control all business logic of data.
  - useSelectors: method to select and access data from store.
  - useDispatch: method to send and save data into store.


- First, we create app folder to house our "store.js" file:
  ```
  import { configureStore } from '@reduxjs/toolkit'
  import todoReducer from '../features/todo/todoSlice'

  const store = configureStore({
    reducer: todoReducer
  })
  export default store
  ```

- configureStore allow us to start our store where we keep our states.

- Our store also need reducers which we must configure as well.
- In "features/todo" folder we our feature/slice file "todoSlice.js".
  ```
  import { createSlice, nanoid } from "@reduxjs/toolkit"
  const initialState = {
    todos: [{
      id: 1,
      text: "String text"
    }]
  }

  const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      addTodo: (state, action) => {
        const todo = {
          id: nanoid(),
          text: action.payload
        }
        state.todos.push(todo)
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id != action.payload)
      }
    }
  })
  export const { addTodo, removeTodo } = todoSlice.actions
  export default todoSlice.reducer
  ```

- Next we wrap our redux provider to top element and pass "store" as prop: "main.jsx".
  ```
  import { createRoot } from 'react-dom/client'
  import { Provider } from 'react-redux'
  import store from './app/store.js'
  import './index.css'
  import App from './App.jsx'

  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  ```

- Now that our store and its state data is avaliable we can use "useSelectors" and "useDispatch".
- Using "useDispatch", we can add todo in our app "Add.jsx":
  ```
  import { useState } from 'react'
  import { useDispatch } from 'react-redux'
  import { addTodo } from '../features/todo/todoSlice'

  const Add = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
      e.preventDefault()
      dispatch(addTodo(input))
      setInput('')
    }
    return (
        <>
          <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={addTodoHandler}>Submit</button>
        </>
    )
  }
  export default Add
  ```

- Next we can use "useSelector" to get todo data from store "Todos.jsx".
  ```
  import { useSelector, useDispatch } from "react-redux"
  import { removeTodo } from "../features/todo/todoSlice"

  const Todos = () => {
    const todos = useSelector(state => state.todos)
    console.log(todos)
    const dispatch = useDispatch()

    return ( 
      <>
        <ul>
          {todos.map((todo) => (
              <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
              </li>
          ))}
        </ul>
      </>
    )
  }
  export default Todos
  ```