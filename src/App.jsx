import { useState } from 'react';
import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Watch YouTube' },
    { id: 3, name: 'Build a Todo App' }
  ]);

  const addNewTodo = (input) => {
    if (input.trim() === '') {
      alert('Please enter a valid todo item.');
      return;
    }
    const newTodo = {
      id: todoList.length + 1,
      name: input
    };
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} alt="React logo" className="logo" />
      </div>
    </div>
  );
}

export default App;