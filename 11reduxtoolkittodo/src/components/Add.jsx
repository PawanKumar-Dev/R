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