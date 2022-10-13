// import { useState } from "react"
import React from 'react'

export default function TodoForm({InputText,setInputText,Todos,setTodos}) {
    // const [InputText, setInputText] = useState('')
    // const [Todos, setTodos] = useState([])
    const InputTextHandler = e =>{
        setInputText(e.target.value)
        // console.log(e.target.value)

    }
    const submitHandler = e => {
        e.preventDefault();
        setTodos([
            ...Todos, {text: InputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText('')
    }
  return (
    <div>
    <form>
      <input value={InputText} type="text" onChange={InputTextHandler} className="todo-input" />
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
