import React, { useState } from "react";

function SetStateAsync() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("function handleClick Called");
    setCount((prevState) => prevState + 1); // handles async setState()
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>Count : {count}</h3>
      <br />
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}

export default SetStateAsync;
