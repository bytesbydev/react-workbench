import React, { useState, useCallback } from 'react';

const Question3 = () => {
  const [num, setNum] = useState(1);

  const multiply = useCallback(() => {
    console.log(num * 2);
  }, [num]);

  return (
    <>
      <button onClick={() => setNum(prev => prev + 1)}>
        Num: {num}
      </button>

      <button onClick={multiply}>
        Multiply
      </button>
    </>
  );
};

export default Question3;