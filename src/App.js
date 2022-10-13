import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [InputText, setInputText] = useState('')
    const [Todos, setTodos] = useState([])
  
  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <TodoForm InputText={InputText} setInputText={setInputText} Todos={Todos} setTodos={setTodos} />
      <TodoList InputText={InputText} setInputText={setInputText} Todos={Todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
