import React, { useRef } from "react";
//learnigs
//change in ref  does not cause re-rendering of the component like (state);
//it is mutable
//we can store dom element in useRef()
function ExampleUseRef() {
  //   console.log("component rendered");
  //   const [counter, setCounter] = useState(1);
  //   const userName = useRef("Anushka");
  //   const handleClick = () => {
  //     userName.current = "Anuja";
  //     console.log(userName);
  //   };

  //example of useRef()
  const h1Ref = useRef();
  function handleClick() {
    const h1Element = h1Ref.current;
    h1Element.textContent = "Anuja";
    h1Element.style.backgroundColor = "Blue";
    h1Element.style.color = "White";
  }
  return (
    <div>
      {/* <h1>UseRef hook</h1>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button> */}
      {/* <h3>{userName.current}</h3>
      <button onClick={handleClick}>Change name</button> */}
      <h1 ref={h1Ref}>Anushka</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default ExampleUseRef;
