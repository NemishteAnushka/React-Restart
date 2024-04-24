import { useState } from "react";
import "./App.css";
// import AbortRequest from "./component/AbortRequest";
import FocusInputOnMount from "./component/FocusInputOnMount";
// import CleanUpFunction from "./component/CleanUpFunction";
// import MouseMoveEvent from "./component/MouseMoveEvent";
// import CleanUpFunctionExample2 from "./component/CleanUpFunctionExample2";
// import UseEffectExample1 from "./component/UseEffectExample1";
// import FetchDataExample from "./component/FetchDataExample";
// import ExampleUseEffect from "./component/ExampleUseEffect";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div>
      {/* <ExampleUseEffect /> */}
      {/* <FetchDataExample/> */}
      {/* <UseEffectExample1 /> */}
      <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => {
          setShowComponent(!showComponent);
        }}
      />
      {/* {showComponent && <AbortRequest />} */}
      {showComponent && <FocusInputOnMount />}
    </div>
  );
}

export default App;
