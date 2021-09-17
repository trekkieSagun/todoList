import React from 'react';


function AddTodo({ setTodos }) {
    const inputRef = React.useRef();
  
    function handleAddTodo(event) {
      event.preventDefault();
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: Math.random(),
        text,
        done: false
      };
      setTodos((prevTodos) => {
        return prevTodos.concat(todo);
      });
      inputRef.current.value = "";
    }
  
    return (
    <div className = "addTodo">
        <form onSubmit={handleAddTodo} className = "form-group">
        <input ref={inputRef} name="addTodo" placeholder="Add todo" className = "form-control" />
        <button type="submit">Submit</button>
      </form>
    </div>
    );
  }

  export default AddTodo