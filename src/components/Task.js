import { CheckOutlined , DeleteOutlined } from '@ant-design/icons'

const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : ""}}
    >
      {task.title}
      <div className="icons">
        <CheckOutlined onClick={() => completeTask(index)} className="complete-icon" />
        <DeleteOutlined onClick={() => removeTask(index)} className="delete-icon" />
      </div>
    </div>
  );
}

export default Task