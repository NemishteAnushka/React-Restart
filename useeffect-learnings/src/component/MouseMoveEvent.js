import React, { useEffect, useState } from "react";

function MouseMoveEvent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    console.log({ x: e.clientX, y: e.clientY });
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove); // remove eventlistner when component unmount
    };
  });
  return (
    <div>
      <h1>How to add Event listner using useEffect()</h1>
      <h1>X :{mousePosition.x} </h1>
      <h1>Y :{mousePosition.y}</h1>
    </div>
  );
}

export default MouseMoveEvent;
