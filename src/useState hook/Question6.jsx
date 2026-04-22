import React, { useState } from 'react';

const Question6 = () => {
  const [check, setCheck] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Checkbox Toggle</h2>

        <label style={styles.label}>
          <input
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
            style={styles.checkbox}
          />
          Show Message
        </label>

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
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "300px"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  label: {
    fontSize: "16px",
    cursor: "pointer"
  },
  checkbox: {
    marginRight: "10px",
    transform: "scale(1.2)"
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#2ecc71",
    fontWeight: "bold"
  }
};

export default Question6;