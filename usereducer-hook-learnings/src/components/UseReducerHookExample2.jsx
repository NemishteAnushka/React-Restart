import React, { useReducer } from "react";
function myReducer(state, action) {
  console.log(state);
  console.log(action);
  if (action.type === "ADD") {
    const array = [...state];
    array.push(action.payload);
    return array;
  } else if (action.type === "REMOVE") {
    const array = [...state];
    array.pop();
    return array;
  } else if (action.type === "CLEAR") {
    return [];
  } else {
    return state;
  }
}
const initialState = [1, 2, 3, 4];
function UseReducerHookExample2() {
  const [state, dispatch] = useReducer(myReducer, initialState);
  console.log(state);
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: Math.floor(Math.random() * 100),
    });
  };
  const handleRemove = () => {
    dispatch({
      type: "REMOVE",
    });
  };
  const handleClear = () => {
    dispatch({
      type: "CLEAR",
    });
  };
  return (
    <div>
      <h1>useReducerHook Example No 2</h1>
      <hr />
      {state.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
      <button onClick={handleAdd}>[+] Add random element to array </button>
      <br />
      <br />
      <button onClick={handleRemove}>[-] Remove element from array</button>
      <br />
      <br />
      <button onClick={handleClear}>Clear button</button>
    </div>
  );
}

export default UseReducerHookExample2;
