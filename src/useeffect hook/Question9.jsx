import React, { useState } from "react";

const Question9 = () => {
  const [num, setNum] = useState(1);

  const double = num * 2;

  return (
    <div>
      <h2>{double}</h2>

      <br />

      <button onClick={() => setNum((prev) => prev + 1)}>
        Increase
      </button>
    </div>
  );
};

export default Question9;