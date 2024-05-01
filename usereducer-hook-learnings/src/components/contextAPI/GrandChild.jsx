import React, { useContext } from "react";
import { MyContext } from "../../App";

function GrandChild() {
  const returnedValue = useContext(MyContext);
  return (
    <div
      style={{
        backgroundColor: "violet",
        padding: "2rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>GrandChild</h2>
      <button onClick={returnedValue}>Call my func</button>
    </div>
  );
}

export default GrandChild;
