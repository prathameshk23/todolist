import React from 'react'


export default function Todo({Todos,setTodos,text,todo}) {
    const deletHandler = () => {
        setTodos(Todos.filter((el) => el.id !== todo.id));
        // console.log(todo)
    }
    const completeHandler = () => {
        setTodos(Todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
  return (
    <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
        <button  onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
        </button>
        <button onClick={deletHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
        </button>
        
    </div>
  )
}
