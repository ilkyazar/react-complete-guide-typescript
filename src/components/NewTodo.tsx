import { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosContext = useContext(TodosContext);

  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = textInputRef.current?.value;
    // submitHandler is definitely called after ref is assigned in returned jsx
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosContext.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">To-do text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add To-do</button>
    </form>
  );
};

export default NewTodo;
