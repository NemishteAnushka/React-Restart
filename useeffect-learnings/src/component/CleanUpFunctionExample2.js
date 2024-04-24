import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      console.log("Timer stopped and cleaned up");
    };
  }, [isActive]); // Dependency array contains 'isActive'

  const toggleTimer = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
    </div>
  );
}

export default Timer;
