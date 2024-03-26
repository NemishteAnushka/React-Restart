import React from "react";
import styles from "./Greetings2.module.css"
import "./Greetings.css";
function Greetings() {
  //create a function to greet with name using all functions method\

  //const firstName = (name) => name.toUpperCase(); //arrow function
  // function firstName(name){                      //function declaration
  //     return name.toUpperCase()
  // }
  //   const firstName = function (name) {            //Annonymus function
  //     return name.toUpperCase();
  //   };
  const firstName = (name) => {
    return name.toUpperCase();
  };
  const isBgDark = false;
  return (
    <div className="container">
    {/* conditional css classes */}
      <h1 className={isBgDark ? "bg-dark" : null}> 
        Greetings from {firstName("Anu")}
      </h1>
      {/* using style bracket notation if there is not single word className else use style.button  */}
      <h1 className={styles["bg-dark"]}> Using module css</h1> 
    </div>
  );
}

export default Greetings;
