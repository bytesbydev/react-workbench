import React, { useEffect, useState } from "react";

const Question7 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <button
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "orange",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click Me
      </button>

      <br />
      <br />

      Clicked the button {count} times
      <br />
      See the title
    </div>
  );
};

export default Question7;