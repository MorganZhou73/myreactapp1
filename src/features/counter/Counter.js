import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount,
    increment,
    decrement,
    incrementByAmount,
    reset,
    incrementAsync
} from './counterSlice';
import './Counter.css';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    const [error, setError] = useState('');

    const handleInputChange = useCallback((e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setIncrementAmount(value);
            setError('');
        } else {
            setError('Please enter a valid number');
        }
    }, []);

    const handleAddAmount = useCallback(() => {
        const amount = Number(incrementAmount);
        if (isNaN(amount)) {
            setError('Invalid number');
            return;
        }
        dispatch(incrementByAmount(amount));
    }, [dispatch, incrementAmount]);

    const handleAddAsync = useCallback(() => {
        const amount = Number(incrementAmount);
        if (isNaN(amount)) {
            setError('Invalid number');
            return;
        }
        dispatch(incrementAsync(amount));
    }, [dispatch, incrementAmount]);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Redux Count: {count} </h2>

            <div style={{ margin: '10px 0' }}>
                <button
                    onClick={() => dispatch(increment())}
                    className="app-btn" 
                    aria-label="Increment value"
                >
                    +
                </button>

                <button
                    onClick={() => dispatch(decrement())}
                    className="app-btn" 
                    aria-label="Decrement value"
                >
                    -
                </button>

                <button
                    onClick={() => dispatch(reset())}
                    className="app-btn" 
                    aria-label="Reset counter"
                >
                    Reset
                </button>
            </div>

            <div style={{ margin: '20px 0' }}>
                <input
                    value={incrementAmount}
                    onChange={handleInputChange}
                    className="app-input"
                    aria-label="Set increment amount"
                />
                <button
                    onClick={handleAddAmount}
                    className="app-btn" 
                    aria-label="Add amount"
                >
                    Add Amount
                </button>
                <button
                    onClick={handleAddAsync}
                    className="app-btn" 
                    aria-label="Add async amount"
                >
                    Add Async Amount
                </button>
            </div>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </div>
    );
}