import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodoItem.module.css";

const NewTodoItem: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // Throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input id="text" name="text" ref={todoInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoItem;
