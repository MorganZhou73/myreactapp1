import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, addTodo, toggleTodo } from './todosSlice';
import './Todos.css';

function Todos() {
    const [todoText, setTodoText] = useState('');
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo(todoText));
            setTodoText('');
        }
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                className="app-input"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Enter todo"
            />
            <button className="app-btn" onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} - {todo.completed ? 'Completed' : 'Incomplete'}
                        <button className="app-btn" onClick={() => handleToggleTodo(todo.id)}>
                            Toggle Status
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
