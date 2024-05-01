import React from "react";
import Child from "./Child";

function MyComponent() {
  return (
    <div
      style={{
        backgroundColor: "pink",
        padding: "2rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>My Component</h2>
      <Child />
    </div>
  );
}

export default MyComponent;
