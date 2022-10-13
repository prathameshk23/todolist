import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <TodoForm/>
      
    </div>
  );
}

export default App;
