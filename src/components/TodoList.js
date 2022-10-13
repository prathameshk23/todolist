import React from 'react'
import Todo from './Todo'
// import Todo from './Todo'

export default function TodoList(props) {
    // console.log(props.Todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.Todos.map(todo => (
            <Todo text={todo.text} key={todo.id} />
        ))}
      </ul>
      
    </div>
  )
}
