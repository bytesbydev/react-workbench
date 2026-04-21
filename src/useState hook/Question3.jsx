import React, { useState } from 'react';

const Question3 = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Toggle Button</h2>

        <button
          style={{
            ...styles.button,
            backgroundColor: isOpen ? "#2ecc71" : "#e74c3c"
          }}
          onClick={handleClick}
        >
          {isOpen ? "ON" : "OFF"}
        </button>

        <p style={styles.status}>
          Status: <span style={{ color: isOpen ? "green" : "red" }}>
            {isOpen ? "Active" : "Inactive"}
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "300px"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  button: {
    padding: "20px 40px",
    fontSize: "24px",
    borderRadius: "50px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s"
  },
  status: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#555"
  }
};

export default Question3;