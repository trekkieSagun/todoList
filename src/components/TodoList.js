import React from "react";

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((item) => item.id !== todo.id);
      });
    }
  }

  return (
    <button
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        padding: "5px",
        marginLeft: 10,
        cursor: "pointer",
        border: "none",
        margin: "10px",
      }}
    >
      Delete
    </button>
  );
}

function TodoList({ todos, setTodos }) {
  function handleCompleteTodo(todo) {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id
        ? {
            ...item,
            done: !item.done,
          }
        : item
    );
    setTodos(updatedTodos);
  }

  if (!todos.length) {
    return <p>No todos left!</p>;
  }

  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => (
          <div className="itemList">
            <li>
              {todo.text}
              <DeleteTodo todo={todo} setTodos={setTodos} />
              {todo.done ? null : (
                <button
                  onClick={() => handleCompleteTodo(todo)}
                  style={{
                    color: "green",
                    padding: "5px",
                    fontWeight: "bold",
                    marginLeft: 10,
                    cursor: "pointer",
                    border: "none",
                    margin: "10px",
                  }}
                >
                  Finish
                </button>
              )}
              {todo.done ? (
                <span
                  style={
                    todo.done ? { color: "green", fontWeight: "600" } : null
                  }
                >
                  {" "}
                  Completed
                </span>
              ) : null}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
