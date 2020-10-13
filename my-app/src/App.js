import React, { useState, useEffect } from 'react';
import './App.css';

// Importing from components

import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  // States
  const [inputText, SetInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

    // Only runs once
    useEffect(() => {
      getLocalTodos();
    },[]);

    // Use Effect
    useEffect(() => {
      filterHandler();
      saveToLocalTodos();
    }, [todos, status]);
  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed': 
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
      setFilteredTodos(todos);
      break;
    }
  };

    // Save to Local
    const saveToLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
      };
      const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null ) {
          localStorage.setItem('todos', JSON.stringify([]));
        } else {
          let todoLocal = JSON.parse(localStorage.getItem('todos'));
          setTodos(todoLocal);
          }
      };

  return (
  <div className="App">
    <header>
  <h1>Joe's To Do List</h1>
    </header>
    <Form  
      inputText= {inputText} 
      todos={todos} 
      setTodos={setTodos} 
      SetInputText ={SetInputText} 
      setStatus= {setStatus}
    />
    <TodoList 
    setTodos={setTodos} todos={todos}
    filteredTodos= {filteredTodos} />
  </div>
  );
}

export default App;
