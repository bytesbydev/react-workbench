import React, { useState } from 'react';

const Question7 = () => {
  const [logged, setLogged] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Status</h2>

        <p style={styles.status}>
          The user is{" "}
          <span style={{ color: logged ? "#2ecc71" : "#e74c3c", fontWeight: "bold" }}>
            {logged ? "Logged In" : "Logged Out"}
          </span>
        </p>

        <button
          style={{
            ...styles.button,
            backgroundColor: logged ? "#e74c3c" : "#2ecc71"
          }}
          onClick={() => setLogged(prev => !prev)}
        >
          {logged ? "Logout" : "Login"}
        </button>
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
    background: "linear-gradient(135deg, #43cea2, #185a9d)"
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
  status: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#555"
  },
  button: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s"
  }
};

export default Question7;