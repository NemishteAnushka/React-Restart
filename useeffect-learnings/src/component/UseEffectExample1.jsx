import React, { useEffect, useState } from "react";
//change the title  using using count show how many times you have clicked on the button in title
function UseEffectExample1() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = count;
  });
  return (
    <div>
      <h1>UseEffect example</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >{`The count is ${count} `}</button>
    </div>
  );
}

export default UseEffectExample1;
