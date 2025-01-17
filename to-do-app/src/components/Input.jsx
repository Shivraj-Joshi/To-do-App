import React from "react";

import { useState } from "react";

const Input = ({ addtask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addtask(input.trim());
      setInput("");
    }
  }; // function to handle the addition of new task to the list

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter your task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Input;
