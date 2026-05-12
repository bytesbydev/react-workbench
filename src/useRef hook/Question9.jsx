import React, { useMemo, useState } from "react";

const Question9 = () => {
  const [count, setCount] = useState(0);

  const numbers = [34, 32, 55, 34, 23, 54, 35, 34, 34, 76, 34];

  const result = useMemo(() => {
    console.log("Calculating...");

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, []);

  return (
    <div>
      <h2>Sum : {result}</h2>

      <h3>Count : {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default Question9;