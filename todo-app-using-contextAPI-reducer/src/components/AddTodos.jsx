import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoContext } from "./TodoProvider";
function AddTodos() {
  const { addTodo } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
  };
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ padding: "8px", marginLeft: "1rem" }}
        type="text"
        placeholder="Add Todo"
        value={title}
        onChange={handleChange}
      />
      <button style={{ padding: "8px", margin: "10px" }}>Submit</button>
    </form>
  );
}

export default AddTodos;
