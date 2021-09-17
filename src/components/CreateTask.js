import { useState } from 'react';

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (el) => {
    el.preventDefault();
    if(!value) return;

    addTask(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default CreateTask;