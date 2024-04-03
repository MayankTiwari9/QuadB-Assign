// TaskInput Component: Allows users to input new tasks
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/action";

const TaskInput = () => {
  // State to manage the input task
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if the task is not empty
    if (task.trim() !== "") {
      // Dispatch action to add task
      dispatch(addTask({ id: Date.now(), text: task }));
      // Clear the input field after adding task
      setTask("");
    }
  };

  return (
    <form onSubmit={handleAddTask} className="w-50 mx-auto mt-5">
      <div className="form-group">
        <label htmlFor="InputTodo">Your todo</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="form-control"
        />
        <button onClick={handleAddTask} className="btn btn-primary mt-2">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
