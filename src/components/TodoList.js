import React from 'react'
import Todo from './Todo'
// import Todo from './Todo'

export default function TodoList({Todos, setTodos}) {
    // console.log(props.Todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {Todos.map(todo => (
            <Todo 
            Todos={Todos} setTodos={setTodos}
            text={todo.text} key={todo.id} todo={todo} />
        ))}
      </ul>
      
    </div>
  )
}
