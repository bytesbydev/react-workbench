import React, { useState } from "react";

const Question9 = () => {
  const [num, setNum] = useState(1);

  const double = num * 2;

  return (
    <div>
      <h2>{double}</h2>

      <br />
<h2>Number: {num}</h2>

<h2>Double: {double}</h2>
      <button onClick={() => setNum((prev) => prev + 1)}>
        Increase
      </button>
      <button
  onClick={() => setNum(prev => prev - 1)}
>
  Decrease
</button>
    </div>
  );
};

export default Question9;