import React from 'react'


export default function Todo({Todos,setTodos,text,todo}) {
    const deletHandler = () => {
        setTodos(Todos.filter((el) => el.id !== todo.id));
        // console.log(todo)

    }
  return (
    <div className="todo">
        <li className="todo-item">{text}</li>
        <button  className="complete-btn">
            <i className="fas fa-check"></i>
        </button>
        <button onClick={deletHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
        </button>
        
    </div>
  )
}
