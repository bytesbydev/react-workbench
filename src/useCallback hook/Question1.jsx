import React, { useState, useCallback } from 'react';

const Question1 = () => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter App</h1>

      <div style={styles.counterContainer}>
        <p style={styles.label}>Current Count:</p>
        <div style={styles.count}>{count}</div>
      </div>

      <button
        onClick={increment}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...styles.button,
          ...(hover ? styles.buttonHover : {})
        }}
      >
        Increment
      </button>

      <button
        style={{ ...styles.button, marginTop: "10px" }}
        onClick={reset}
      >
        Reset
      </button>

      <p style={styles.info}>
        Total Clicks: {count}
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  title: { color: '#1a73e8' },
  counterContainer: { textAlign: 'center' },
  label: { fontSize: '18px' },
  count: { fontSize: '80px', fontWeight: 'bold' },
  button: {
    backgroundColor: '#1a73e8',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  buttonHover: {
    backgroundColor: '#185abc'
  },
  info: {
    marginTop: '20px'
  }
};

export default Question1;