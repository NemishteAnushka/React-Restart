import React, { useReducer } from "react";
//useReducer
//return
//[state,functionToUpdateState]
// functionToUpdateState we write dispatch which function to update the state
// [state,dispatch]=useReducer()

//here  as an argument we pass
//  1) reducer Function
//  2) initial state

//syntax
// const [state,dispatch]=useReducer(reducerFunction,initialState)

//we define function and initialState outside
//we can also pass the InitialState directly in argument
//std practise is to declare outside

//dispatch()
//we have to pass  object as an argument when we call dispatch
// that object is known as action

//reducer() as parameter
// 1) state,
// 2) action
const reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  if (action.type === "INCREASE") {
    return { count: state.count + 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  } else if (action.type === "DECREASE") {
    return { count: state.count - 1 };
  } else {
    return state;
  }
};
const initialState = {
  count: 0,
};
function ReducerHookExample() {
  // const [state, setState] = useState({ count: 0 });
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrease = () =>
    // setState((prev) => ({ ...prev, count: prev.count + 1 }));

    dispatch({
      type: "INCREASE",
    }); // we use dispatch to update the state

  const handleReset = () => {
    // setState((prev) => {
    //   return { ...prev, count: 0 };
    // });
    dispatch({
      type: "RESET",
    });
  };
  const handleDecrease = () => {
    // setState((prev) => ({ ...prev, count: prev.count - 1 }));
    dispatch({
      type: "DECREASE",
    });
  };
  return (
    <>
      <h1>useReducer Hook</h1>
      <hr />
      <h3>Counter Application</h3>
      <h2>Count : {state.count}</h2>
      <button onClick={handleIncrease}>Increase</button> &nbsp;
      <button onClick={handleReset}>Reset</button> &nbsp;
      <button onClick={handleDecrease}>Decrease</button> &nbsp;
    </>
  );
}

export default ReducerHookExample;
