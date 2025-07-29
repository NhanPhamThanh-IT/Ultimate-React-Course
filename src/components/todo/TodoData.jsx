const TodoData = (props) => {
    const { todoList } = props;
    return (
        <div className="todo-data">
            <div>
                {todoList.map((todo) => (
                    <p key={todo.id}>{todo.name}</p>
                ))}
            </div>
        </div>
    );
}

export default TodoData;