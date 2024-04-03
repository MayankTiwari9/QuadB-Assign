// App Component: Main component rendering TaskInput and TaskList
import React from "react";
import TaskInput from "./Components/TaskInput/TaskInput";
import TaskList from "./Components/TaskList/TaskList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <h1 className="heading">To Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
