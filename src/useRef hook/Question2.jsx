import React, { useRef, useState } from "react";

const Question2 = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    countRef.current += 1;
    setCount(countRef.current);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>useRef Counter Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default Question2;
