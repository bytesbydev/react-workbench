import React, { useState } from "react";

const Question2 = () => {
  const [text, setText] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Live Text Preview</h2>

        <input
          style={styles.input}
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div style={styles.previewBox}>
          <p style={styles.output}>
            {text || "Your text will appear here..."}
          </p>
        </div>

        <p style={styles.counter}>
          Characters: {text.length}
        </p>
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
    background: "linear-gradient(135deg,#74ebd5,#ACB6E5)",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  previewBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#f5f7fa",
    borderRadius: "10px",
    minHeight: "60px",
  },
  output: {
    margin: 0,
    fontSize: "18px",
    wordBreak: "break-word",
  },
  counter: {
    marginTop: "15px",
    textAlign: "right",
    color: "#666",
  },
};

export default Question2;