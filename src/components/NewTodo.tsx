const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">To-do text</label>
      <input type="text" id="text" />
      <button>Add To-do</button>
    </form>
  );
};

export default NewTodo;
