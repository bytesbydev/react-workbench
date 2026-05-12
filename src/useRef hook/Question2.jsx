import React, { useRef } from "react";

const Question2 = () => {

  const countRef = useRef(0);

  const increaseCount = () => {

    countRef.current = countRef.current + 1;

    console.log("Count :", countRef.current);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h2>useRef Counter Example</h2>

      <button
        onClick={increaseCount}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          background: "#4CAF50",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Increase
      </button>

    </div>
  );
};

export default Question2;