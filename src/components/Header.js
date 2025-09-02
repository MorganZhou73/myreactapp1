import { useSelector } from 'react-redux';
import { selectCount } from '../features/counter/counterSlice';
import { selectTodos } from '../features/todos/todosSlice';

function Header() {
    const count = useSelector(selectCount);
    const todos = useSelector(selectTodos);
    const completedTodos = todos.filter(todo => todo.completed).length;

    return (
        <div>
            <h2>Global State Summary</h2>
            <p>Counter: {count} | Todos: {todos.length} | Completed: {completedTodos}</p>
        </div>
    );
}

export default Header;
