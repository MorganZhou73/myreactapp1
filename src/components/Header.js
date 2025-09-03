import { useContext } from 'react';
import { UserContext } from '../App';
import { useSelector } from 'react-redux';
import { selectCount } from '../features/counter/counterSlice';
import { selectTodos } from '../features/todos/todosSlice';
import Score from './Score';

function Header() {
    const count = useSelector(selectCount);
    const todos = useSelector(selectTodos);
    const completedTodos = todos.filter(todo => todo.completed).length;
    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>Global State Summary</h2>
            <p>Counter: {count} | Todos: {todos.length} | Completed: {completedTodos} | User: {user.email}</p>
            <Score />
        </div>
    );
}

export default Header;
