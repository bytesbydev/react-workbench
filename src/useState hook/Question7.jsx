import React, { useState } from 'react';

const Question7 = () => {
  const [logged, setLogged] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Status</h2>

        <p style={styles.status}>
          The user is{" "}
          <span
            style={{
              ...styles.statusText,
              color: logged ? "#2ecc71" : "#e74c3c"
            }}
          >
            {logged ? "🟢 Logged In" : "🔴 Logged Out"}
          </span>
        </p>

        <button
          style={{
            ...styles.button,
            backgroundColor: logged ? "#e74c3c" : "#2ecc71",
            transform: logged ? "scale(1.05)" : "scale(1)"
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
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
    textAlign: "center",
    width: "300px",
    transition: "0.3s"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  status: {
    fontSize: "18px",
    marginBottom: "25px",
    color: "#555"
  },
  statusText: {
    fontWeight: "bold",
    transition: "0.3s"
  },
  button: {
    padding: "12px 25px",
    borderRadius: "12px",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }
};

export default Question7;