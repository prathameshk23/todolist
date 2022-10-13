// import { useState } from "react"
import React from 'react'

export default function TodoForm(props) {
    // const [InputText, setInputText] = useState('')
    // const [Todos, setTodos] = useState([])
    const InputTextHandler = e =>{
        props.setInputText(e.target.value)
        // console.log(e.target.value)

    }
    const submitHandler = e => {
        e.preventDefault();
        props.setTodos([
            ...props.Todos, {text: props.InputText, completed: false, id: Math.random* 1000}
        ]);
        props.setInputText('')
    }
  return (
    <div>
    <form>
      <input value={props.InputText} type="text" onChange={InputTextHandler} className="todo-input" />
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
  )
}
