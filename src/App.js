import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByTen, decrementByTen, reset } from './store';

const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value);

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByTen())}>+10</button>
            <button onClick={() => dispatch(decrementByTen())}>-10</button>
            <button onClick={() => dispatch(reset())}>Сброс</button>
        </div>
    );
};

export default App;
