import React, { useState } from 'react';

const Question8 = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Dev" },
    { id: 2, name: "Rahul" }
  ]);

  const [input, setInput] = useState("");

  const addUser = () => {
    if (input.trim() === "") return;

    const newUser = {
      id: Date.now(),
      name: input
    };

    setUsers(prev => [...prev, newUser]);
    setInput("");
  };

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Manager</h2>

        <div style={styles.inputGroup}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button style={styles.addBtn} onClick={addUser}>
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {users.map(user => (
            <li key={user.id} style={styles.listItem}>
              <span>{user.name}</span>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #84fab0, #8fd3f4)"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px"
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px"
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none"
  },
  addBtn: {
    padding: "10px 15px",
    background: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f4f4f4",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px"
  },
  deleteBtn: {
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Question8;