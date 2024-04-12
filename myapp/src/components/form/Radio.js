import React, { useState } from "react";

function Radio() {
  const [selectedRadio, setSelectedRadio] = useState("");
  const handleOnChange = (e) => {
    setSelectedRadio(e.target.value);
  };
  return (
    <div>
      <h1>Radio Button</h1>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="male"
        value="male"
        checked={selectedRadio === "male"}
        onChange={handleOnChange}
      />
      <br />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        id="female"
        value="female"
        checked={selectedRadio === "female"}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Radio;
