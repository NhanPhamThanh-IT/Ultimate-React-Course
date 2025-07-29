import { useState } from 'react';
import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

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

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id));
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {todoList.length > 0 ? (
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
        ) : (
          <div className="todo-image">
            <img src={reactLogo} alt="React logo" className="logo" />
          </div>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;