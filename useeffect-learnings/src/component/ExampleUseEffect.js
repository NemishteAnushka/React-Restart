import React, { useEffect, useState } from "react";
//useEffect
//1st argument : callback function
//2nd argument : dependancy array

//dependancy array
//[]----> useeffect will be called only once on initial mode with empty array
// dependancy array with some value will update with that value
function ExampleUseEffect() {
  console.log("Component rendered");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  function handleClick() {
    setCount((prevState) => {
      return prevState + 1;
    });
  }
  function handleClick1() {
    setCount1((prevState) => {
      return prevState + 1;
    });
  }
  // //   useEffect(() => {
  // //     console.log("inside the useEffect hook");
  //   }, []); // with empty array it will called once

  useEffect(() => {
    console.log("inside useEffect");
  }, [count]); // now this will be call everytime as we update the count state
  return (
    <div>
      <h1>useEffect() Example</h1>
      <h2>useEffect takes callback function as input</h2>
      <h3>It allows us to perform sideeffects in functional components</h3>
      <h2>Count : {count}</h2>
      <button onClick={handleClick}>Increase</button>
      <br />
      {/* now useeffect will not be called when we click on count 1 button as it we have given value as count means whenever count state will be updated useEffect will be called */}
      <h2>Count1 : {count1}</h2>
      <button onClick={handleClick1}>Increase</button>
    </div>
  );
}

export default ExampleUseEffect;
