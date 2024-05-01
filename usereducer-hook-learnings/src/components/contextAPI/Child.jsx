import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: "3rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>Child</h2>
      <GrandChild  />
    </div>
  );
}

export default Child;
