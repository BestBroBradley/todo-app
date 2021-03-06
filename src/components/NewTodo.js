import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { add, clear, controlledInput } from "../actions"


const NewTodo = () => {

    const dispatch = useDispatch()

    const current = useSelector(state => (state.current))

    const handleChange = (event) => {
        const { name, value } = event.target
        dispatch(controlledInput(name, value))
    }

    const handleSubmit = () => {
        if (current.title === "" || current.date === "") {
            alert("Make sure you have a title and due date!");
        } else {
            dispatch(add(current))
            dispatch(clear())
        }

    }

    return (
        <>
            <h2 className="Header">Add a new to-do:</h2>
            <h4>I have to...</h4>
            <input value={current.title} name="title" onChange={handleChange} />
            <h4>Gotta do it by...</h4>
            <input value={current.date} name="date" onChange={handleChange} />
            <h4>Extra notes?</h4>
            <input value={current.memo} name="memo" onChange={handleChange} />
            <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default NewTodo