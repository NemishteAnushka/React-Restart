import { useState } from "react";
import "./App.css";
// import CleanUpFunction from "./component/CleanUpFunction";
import MouseMoveEvent from "./component/MouseMoveEvent";
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
      {showComponent && <MouseMoveEvent />}
    </div>
  );
}

export default App;
