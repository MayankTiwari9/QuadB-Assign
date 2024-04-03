// TaskList Component: Displays the list of tasks
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleComplete } from "../../Redux/action";

const TaskList = () => {
  // Select tasks from Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Function to handle task deletion
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Function to handle task editing
  const handleEditTask = (taskId, newText) => {
    dispatch(editTask(taskId, newText));
  };

  // Function to handle toggling task completion status
  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <ul className="list-unstyled">
      {tasks &&
        tasks.map((task) => (
          <div className="d-flex justify-content-between w-50 mx-auto mt-2 p-2 align-items-center" key={task.id}>
            <li
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "lightgray" : "inherit",
              }}
            >
              {task.text}
            </li>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="btn btn-danger m-2"
            >
              Delete
            </button>
            <button
              onClick={() => {
                const newText = prompt("Enter new task text:", task.text);
                if (newText !== null) {
                  handleEditTask(task.id, newText);
                }
              }}
              className="btn btn-success m-2"
            >
              Edit
            </button>
            <button
              className="btn btn-warning m-2"
              onClick={() => handleToggleComplete(task.id)}
            >
              {task.completed ? "Undo Complete" : "Complete"}
            </button>
          </div>
        ))}
    </ul>
  );
};

export default TaskList;
