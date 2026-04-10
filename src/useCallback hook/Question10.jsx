import React, { useState, useCallback } from 'react';

const Question10 = () => {
  const [num, setNum] = useState(0);

  const getSquare = useCallback(() => {
    return num * num;
  }, [num]);

  return (
    <div>
      <h3>Number: {num}</h3>
      <h3>Square: {getSquare()}</h3>

      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  );
};

export default Question10;