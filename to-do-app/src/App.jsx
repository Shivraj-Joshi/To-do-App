import { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks && Array.isArray(savedTasks)) {
      setTasks(savedTasks);
      console.log("loading the tasks from local storage:", savedTasks);
    }
  }, []); // to retrieve data(tasks) from the local storage

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("the task is added to the local storage", tasks);
  }, [tasks]); // storing the tasks in the local storage

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
