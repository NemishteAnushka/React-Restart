import { useState } from "react";
import "../../App.css";
function UseState() {
//   let firstName = "Anushka";
const [firstName,setFirstName]=useState("Anushka")
  function handleClick() {
    // console.log("you clicked");
    // firstName = "Anuja";
    // console.log(firstName); we cannot change like this so we use state 
    // setFirstName("Anuja")
    // now lets toggle
    if(firstName === "Anushka"){
        setFirstName("Anuja")
    }else{
        setFirstName("Anushka")
    }
  }
  return (
    <div className="center">
      <br />
      <h1>All about UseState</h1>
      <h1>{firstName}</h1>
      <br />
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default UseState;
