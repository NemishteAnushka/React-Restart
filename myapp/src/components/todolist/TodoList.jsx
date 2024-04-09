import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  function toggleCompleted(id) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }
  function deleteTodo(id) {
    setTodos((prevState) => {
      return prevState.filter((user) => {
        return user.id !== id;
      });
    });
  }
  return (
    <div className="container">
      <ToastContainer />
      <h1>TODO List Demo App</h1>
      <TodoForm addtodo={addtodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoList;
