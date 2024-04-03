import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function TodoForm({ addtodo }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      return alert("please enter task then hit 'Enter'");
    }
    const newtodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    addtodo(newtodo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        className="todo-form"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
