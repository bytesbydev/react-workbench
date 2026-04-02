import React, { useState, useCallback } from 'react';

const Question3 = () => {
  const [num, setNum] = useState(1);
  const [result, setResult] = useState(2);

  const multiply = useCallback(() => {
    setResult(num * 2);
  }, [num]);

  return (
    <>
      <button onClick={() => setNum(prev => prev + 1)}>
        Num: {num}
      </button>

      <button onClick={multiply}>
        Multiply
      </button>

      <h3>Result: {result}</h3>
    </>
  );
};

export default Question3;