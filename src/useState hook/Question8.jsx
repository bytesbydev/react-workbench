import React, { useState } from 'react';

const Question8 = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Dev" },
    { id: 2, name: "Rahul" }
  ]);

  const [input, setInput] = useState("");

  // Add new user
  const addUser = () => {
    if (input.trim() === "") return;

    const newUser = {
      id: Date.now(),
      name: input
    };

    setUsers(prev => [...prev, newUser]);
    setInput("");
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Question 8 - useState Example</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addUser} style={{ marginLeft: "10px" }}>
        Add User
      </button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button
              onClick={() => deleteUser(user.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question8;