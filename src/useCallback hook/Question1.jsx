import React, { useState, useCallback } from 'react';

const Question1 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
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
        style={styles.button}
      >
        Increment
      </button>

      <p style={styles.info}>
        Using <code>useCallback</code> for the increment function
      </p>
    </div>
  );
};

// Inline styles object
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  title: {
    color: '#1a73e8',
    marginBottom: '30px',
  },
  counterContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  label: {
    fontSize: '18px',
    color: '#5f6368',
    marginBottom: '10px',
  },
  count: {
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#202124',
    margin: '0',
    lineHeight: '1',
  },
  button: {
    backgroundColor: '#1a73e8',
    color: 'white',
    padding: '15px 32px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(26, 115, 232, 0.3)',
  },
  buttonHover: {
    backgroundColor: '#185abc',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(26, 115, 232, 0.4)',
  },
  info: {
    marginTop: '40px',
    color: '#666',
    fontSize: '14px',
  }
};

export default Question1;