// Redux reducer
import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_COMPLETE } from "./action";

// Load tasks from local storage if available, otherwise initialize with an empty array
const initialState = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : { tasks: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = action.payload;
      const updatedTasksAdd = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify({ tasks: updatedTasksAdd }));
      return { tasks: updatedTasksAdd };

    case DELETE_TASK:
      const taskIdToDelete = action.payload;
      const updatedTasksDelete = state.tasks.filter(
        (task) => task.id !== taskIdToDelete
      );
      localStorage.setItem(
        "tasks",
        JSON.stringify({ tasks: updatedTasksDelete })
      );
      return { tasks: updatedTasksDelete };

    case EDIT_TASK:
      const { id, newText } = action.payload;
      const updatedTasksEdit = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      });
      localStorage.setItem(
        "tasks",
        JSON.stringify({ tasks: updatedTasksEdit })
      );
      return { tasks: updatedTasksEdit };

    case TOGGLE_COMPLETE:
      const taskIdToToggle = action.payload;
      const updatedTasksToggle = state.tasks.map((task) => {
        if (task.id === taskIdToToggle) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem(
        "tasks",
        JSON.stringify({ tasks: updatedTasksToggle })
      );
      return { tasks: updatedTasksToggle };

    default:
      return state;
  }
};

export default rootReducer;
