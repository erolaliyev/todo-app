import React, { useState } from 'react'
import './ToDo.css'

const Task = (task) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.task.completed ? "line-through" : ""}}
    >
      {task.task.title}
    </div>
  )
}

const ToDo = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Create to do app",
      completed: false
    },
    {
      title: "Go to gym",
      completed: true
    }
  ]);

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task 
            task={task}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDo;