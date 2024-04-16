import React, { useState } from "react";

function InitialStateWithFunction() {
  function generateArray() {
    const randomNums = [];
    for (let i = 0; i <= 10; i++) {
      randomNums.push(Math.random() * 100);
    }
    return randomNums;
  }

  const [nums, setNums] = useState(generateArray);
  function handleClick() {
    setNums((prevState) => {
      return [...prevState, Math.random() * 100];
    });
  }
  return (
    <div>
      <h1>Initializing state with function</h1>
      <ul>
        {nums.map((num) => {
          return <li>{num}</li>;
        })}
      </ul>
      <button onClick={handleClick}>Generate Random number</button>
    </div>
  );
}

export default InitialStateWithFunction;
