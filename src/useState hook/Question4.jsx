import React, { useState } from 'react';

const Question4 = () => {
  const [all, setAll] = useState([]);
  const [task, setTask] = useState("");

  const handleLog = () => {
    if (task.trim() === "") return;

    setAll(prev => [...prev, task]);
    setTask("");
  };

  return (
    <div style={{ fontSize: "18px" }}>
      <label htmlFor="task">
        Enter the task:
      </label>
      <br />

      <input
        id="task"
        value={task}
        placeholder="Enter task..."
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "30px",
          fontSize: "14px"
        }}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />

      <br /><br />

      <button
        style={{
          padding: "10px",
          fontSize: "15px",
          borderRadius: "10px",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer"
        }}
        onClick={handleLog}
      >
        Add Task
      </button>

      <br /><br />

      <strong>All Tasks:</strong>

      <br />

      {all.map((item, index) => (
        <div key={index}>
          {index + 1}. {item}
        </div>
      ))}
    </div>
  );
};

export default Question4;