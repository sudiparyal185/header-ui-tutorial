import React from "react";
import { useState } from "react";
import './Counter.css';
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter__container">
      <h1>{`Counter is ${counter}`}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
    </div>
  );
};

export default Counter;
