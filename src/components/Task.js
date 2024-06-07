/* import React, { useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="tasks-container">
      <h2>Lista de Tareas</h2>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default Tasks; */ 

import React from "react";
import "./Task.css";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <span>
        {task.task} - {task.date} - {task.time}
      </span>
      <button onClick={() => onDelete(task)}>✔</button>
    </div>
  );
};

export default Task;
