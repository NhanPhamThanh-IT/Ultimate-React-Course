const TodoData = (props) => {
    const { name } = props;
    return (
        <div className="todo-data">
            <div className="todo-name">Hello, {name}!</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    );
}

export default TodoData;