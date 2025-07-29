import { useState } from 'react';

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState('');

    const { addNewTodo } = props;

    const handleClick = () => {
        addNewTodo(valueInput);
    };

    const handleChange = (input) => {
        setValueInput(input);
    };

    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => handleChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >
                Add
            </button>
            <div>
                My test input is: {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;
