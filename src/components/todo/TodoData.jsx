const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const handleDelete = (id) => {
        deleteTodo(id);
    }

    return (
        <div className="todo-data">
            {todoList.map((item, index) => (
                <div key={index} className="todo-item">
                    <div>{item.name}</div>
                    <button
                        onClick={() => handleDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TodoData;