import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, isCompleted: false }]);
  }; //function to add a new task entered by the user

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    ); //function to check if the task has completed or not
  };

  const deletTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }; //function to delete the task selected by the user

  return (
    <>
      <h1>To-Do-App</h1>
      <Input addtask={addTask} />
      <List
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deletTask}
      />
    </>
  );
}

export default App;
