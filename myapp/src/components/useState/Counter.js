import React, { useState } from "react";
import "../../App.css";
function Counter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    // setCount(count+1)
    setCount((prevState) => {
      return prevState + 1; //we can also pass callback 
    });
  }
  function resetCount() {
    setCount(0);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  return (
    <div className="center">
      <h1>Counter Application</h1>
      <br />
      <h1>{count}</h1>
      <button className="btn" onClick={increaseCount}>
        Increase
      </button>
      <button className="btn" onClick={resetCount}>
        Reset
      </button>
      <button className="btn" onClick={decreaseCount}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
