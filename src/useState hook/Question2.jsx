import React, { useState } from 'react';

const Question2 = () => {
  const [text, setText] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Live Text Preview</h2>

        <input
          style={styles.input}
          placeholder="Enter the text..."
          type="text"
          onChange={(e) => setText(e.target.value)}
        />

        <p style={styles.output}>
          The text typed: <span style={styles.highlight}>{text}</span>
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
    background: "linear-gradient(135deg, #74ebd5, #ACB6E5)"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "350px"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  input: {
    padding: "12px",
    width: "100%",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
    marginBottom: "20px"
  },
  output: {
    fontSize: "18px",
    color: "#555"
  },
  highlight: {
    color: "#e63946",
    fontWeight: "bold"
  }
};

export default Question2;