import { useState } from 'react'
import Task from './components/Task'
import CreateTask from './components/CreateTask'
import './ToDo.css'

const ToDo = () => {
  const [tasks, setTasks] = useState(() => localStorage.getItem("tasks") === null ? [] : JSON.parse(localStorage.getItem("tasks")) );

  const addTask = title => {
    const newTasks = [...tasks, {title, completed: false}];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  return (
    <div className="todo-container">
      <div className="header"> To Dos... </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task 
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default ToDo;