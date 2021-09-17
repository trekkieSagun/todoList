import React from "react";
import "./style.css";
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList";


export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div className = "container body-full">
      <h1>Todo List</h1>
      <TodoList setTodos={setTodos} todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}




