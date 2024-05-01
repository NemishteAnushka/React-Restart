import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function AddTodo({ dispatch }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("Type something");
      return;
    }
    const newTodo = {
      id: uuid(),
      title: value,
      completed: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setValue("");
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{
          width: "80%",
          margin: "1rem",
          padding: "0.5rem",
        }}
        type="text"
        name="addForm"
        id="addForm"
        placeholder="Add Todo"
        value={value}
        onChange={handleOnChange}
      />
      <button
        style={{
          margin: "1rem",
          padding: "0.5rem",
          textAlign: "center",
          cursor: "pointer",
        }}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
