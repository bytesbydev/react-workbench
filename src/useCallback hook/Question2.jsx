import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
});

const Question2 = () => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleClick = useCallback(() => {
    setClicks(prev => prev + 1);
  }, []);

  return (
    <>
      <Child onClick={handleClick} />

      <p>Child Clicks: {clicks}</p>

      <button onClick={() => setCount(count + 1)}>
        Parent Count: {count}
      </button>
    </>
  );
};

export default Question2;