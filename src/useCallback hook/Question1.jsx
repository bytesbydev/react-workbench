import React, { useState, useCallback } from 'react';

const Question1 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <button onClick={increment}>Count: {count}</button>;
};

export default Question1;