import React, { createContext, useReducer } from "react";
export const TodoContext = createContext();
function myReducer(todos, action) {
  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload);
  }
  if (action.type === "TODO_COMPLETED") {
    return todos.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload];
  }

  return todos;
}
const initialState = [
  { id: "1", title: "done homework", completed: true },
  { id: "2", title: " Learn Javascript", completed: true },
  { id: "3", title: "Learn Reactjs", completed: false },
];
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(myReducer, initialState);
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
  const ToggleCompleted = (id) => {
    dispatch({
      type: "TODO_COMPLETED",
      payload: id,
    });
  };
  const addTodo = (newTodo) => {
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };
  return (
    <TodoContext.Provider
      value={{ todos, handleDelete, ToggleCompleted, addTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
