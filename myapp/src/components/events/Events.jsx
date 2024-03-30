import React from "react";

function Events() {
  function clicked(e) {
    console.log(e.target);
    console.log("You clicked me");
    e.target.textContent = "You clicked me"
  }
  function button2(firstName,lastName){
    console.log(firstName, lastName)
  }
  return (
    <div>
      <h1>Events</h1>
      <button onClick={clicked}>Click me</button>
      <br />
      <br />
      <button onClick={()=>{button2("Anushka","Nemishte")}}>button2</button>
    </div>
  );
}

export default Events;
