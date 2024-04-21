import React, { useEffect, useState } from "react";

function CleanUpFunction() {
  //clean up function
  //1 : it calls when component is unmount(means agar screen se component hat jaye tab ye call hoga)
  //2 : When there is some value inside the dependancy array

  //when value changes
  //  1.Component re-renders
  //  2.Cleanup function
  //  3.useEffect run
  console.log("component rendered...");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("inside useEffect....");
    return function () {
      console.log("Clean up Function");
    };
  }, [count]);
  return (
    <div>
      <h1>Clean Up function</h1>
      <h3>Count : {count} </h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default CleanUpFunction;
