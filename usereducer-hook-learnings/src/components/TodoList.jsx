import React, { useReducer } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function TodoList() {
  function myReducer(todos, action) {
    console.log(action);
    if (action.type === "DELETE") {
      return todos.filter((todo) => action.payload !== todo.id);
    }
    if (action.type === "ADD_TODO") {
      return [...todos, action.payload];
    }
    if (action.type === "COMPLETED") {
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }
    return todos;
  }
  const initialState = [
    { id: "1", title: "do homework", completed: true },
    { id: "2", title: "new work", completed: false },
    { id: "3", title: "complete react js", completed: false },
    { id: "4", title: "learn javascript", completed: true },
  ];
  const [todos, dispatch] = useReducer(myReducer, initialState);
  return (
    <div>
      <h2>Todo List Using UseReducer()</h2>
      <AddTodo dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default TodoList;
