import React, { useEffect } from "react";

const Question10 = () => {
  useEffect(() => {
    console.log("Mounted");

    return () => console.log("Unmounted");
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Check Console</h2>
  <p>
  Open the browser console to view mount and unmount logs.
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
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    padding: "30px 40px",
    borderRadius: "15px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    textAlign: "center",
    color: "white",
  },
};

export default Question10;