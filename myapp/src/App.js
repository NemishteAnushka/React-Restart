import React from "react";
import Props from "./components/props/Props";
// import HelloWorld from "./components/HelloWorld";
// import Greetings from "./components/Greetings";

function App() {
  const arrayProps = ["fruit", "vegetable"];
  const objectProps = { hobby: "dance" };
  return (
    <>
      {/* <HelloWorld />
      <Greetings /> */}
      <Props
        firstName="Avinash"
        lastName="Nemishte"
        age={22}
        arrayProps={arrayProps}
        objectProps={objectProps}
      />
      {/* we can also pass array,object and numbers through props*/}
    </>
  );
}

export default App;
