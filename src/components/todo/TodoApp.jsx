import { useState } from 'react';
import './todo.css';
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

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
    )
}

export default TodoApp;