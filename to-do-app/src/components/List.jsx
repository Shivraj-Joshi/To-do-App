import React from "react";

const List = ({ tasks, toggleComplete, deleteTask }) => {
  console.log("Tasks received by List:", tasks);

  if (!tasks || tasks.length === 0) {
    return <p>No tasks to display</p>;
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleComplete(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                flex: 1,
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
