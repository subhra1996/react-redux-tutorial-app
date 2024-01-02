import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../services/actions/counterAction';

const CounterApp = () => {
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();

  const handleIncrement=()=>{
    dispatch(increment());
  }

  const handleDecrement=()=>{
    dispatch(decrement());
  }

  const handleReset =() =>{
    dispatch(reset());
  }
  return (
    <div>
      <h3>Counter App</h3>
      <div>{count}</div>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterApp;