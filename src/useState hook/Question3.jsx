import React, { useState } from "react";

const Question3 = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Toggle Switch</h2>

        <button
          onClick={() => setIsOn(!isOn)}
          style={{
            ...styles.button,
            backgroundColor: isOn ? "#2ecc71" : "#e74c3c",
          }}
        >
          {isOn ? "ON" : "OFF"}
        </button>

        <p style={styles.status}>
          Status:
          <span
            style={{
              color: isOn ? "#2ecc71" : "#e74c3c",
              fontWeight: "bold",
              marginLeft: "8px",
            }}
          >
            {isOn ? "Active" : "Inactive"}
          </span>
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
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "350px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  heading: {
    marginBottom: "25px",
    color: "#333",
  },
  button: {
    border: "none",
    color: "#fff",
    padding: "18px 40px",
    borderRadius: "50px",
    fontSize: "22px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  status: {
    marginTop: "20px",
    fontSize: "18px",
  },
};

export default Question3;