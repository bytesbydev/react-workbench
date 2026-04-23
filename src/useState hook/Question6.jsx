import React, { useState } from 'react';

const Question6 = () => {
  const [check, setCheck] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Toggle Switch</h2>

        <div style={styles.switchContainer} onClick={() => setCheck(!check)}>
          <div
            style={{
              ...styles.switch,
              backgroundColor: check ? "#2ecc71" : "#ccc"
            }}
          >
            <div
              style={{
                ...styles.circle,
                transform: check ? "translateX(26px)" : "translateX(0)"
              }}
            />
          </div>
          <span style={styles.label}>
            {check ? "ON" : "OFF"}
          </span>
        </div>

        {check && (
          <p style={styles.message}>
            Hello, this is the message 🎉
          </p>
        )}
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
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
    textAlign: "center",
    width: "300px"
  },
  heading: {
    marginBottom: "25px",
    color: "#333"
  },
  switchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer"
  },
  switch: {
    width: "50px",
    height: "24px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    padding: "2px",
    transition: "0.3s"
  },
  circle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "#fff",
    transition: "0.3s"
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold"
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#2ecc71",
    fontWeight: "bold"
  }
};

export default Question6;