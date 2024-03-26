import React from "react";
//default props are those which are not passed as props but we can define them in function parameters
function DefaultProps({ fullName = "AnushkaNemishte" }) {
  return (
    <div>
      <h1>Default Props</h1>
      <h1>Full Name: {fullName}</h1>
    </div>
  );
}

export default DefaultProps;
