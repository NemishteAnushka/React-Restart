import React, { useState } from "react";
import "../../App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React js", completed: false },
    { id: 2, title: "Learn javaScript", completed: true },
    { id: 3, title: "Do home work", completed: true },
  ]);

  function addtodo(newtodo) {
    setTodos((prevState) => [...prevState, newtodo]);
  }
  return (
    <div className="container">
      <h1>TODO List Demo App</h1>
      <TodoForm addtodo={addtodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default TodoList;
