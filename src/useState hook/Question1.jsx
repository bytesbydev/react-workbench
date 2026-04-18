import React, { useState } from "react";

const Question1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Counter App</h1>

        <h2 style={styles.count}>{count}</h2>

        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => setCount(count + 1)}
          >
            +1
          </button>

          <button
            style={styles.button}
            onClick={() => setCount(count - 1)}
          >
            -1
          </button>

          <button
            style={styles.resetButton}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
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
    background: "linear-gradient(135deg,#4facfe,#00f2fe)",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  count: {
    fontSize: "4rem",
    marginBottom: "25px",
    color: "#0077ff",
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: "center",
  },
  button: {
    padding: "12px 20px",
    fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#0077ff",
    color: "#fff",
  },
  resetButton: {
    padding: "12px 20px",
    fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#ff4757",
    color: "#fff",
  },
};

export default Question1;