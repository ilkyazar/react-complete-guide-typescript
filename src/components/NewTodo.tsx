import { useRef } from 'react';

const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = textInputRef.current?.value;
    // submitHandler is definitely called after ref is assigned in returned jsx
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">To-do text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add To-do</button>
    </form>
  );
};

export default NewTodo;
