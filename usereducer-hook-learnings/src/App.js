import { createContext } from "react";
import "./App.css";
import MyComponent from "./components/contextAPI/MyComponent";
// import TodoList from "./components/TodoList";
// import UseReducerHookExample2 from "./components/UseReducerHookExample2";
// import ReducerHookExample from "./components/ReducerHookExample";

//how to use context
//step 1 - import createContext from react
//step 2 - create context outside the component
//step 3 -  wrap the application inside context.provider
export const MyContext = createContext(); //created context
function App() {
  function myFunc() {
    console.log("Called myFunction");
  }

  return (
    <MyContext.Provider value={myFunc}>
      <div
        style={{
          backgroundColor: "red",
          height: "100vh",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* <ReducerHookExample /> */}
        {/* <UseReducerHookExample2 /> */}
        {/* <TodoList /> */}
        <h2>App</h2>
        <MyComponent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
