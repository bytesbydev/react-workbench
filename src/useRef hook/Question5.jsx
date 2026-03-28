import React, { useState } from "react";

const Question5 = () => {
  const [previous, setPrevious] = useState("");

  const [current, setCurrent] = useState("");

  const changeHandler = (e) => {
    setPrevious(current);
    setCurrent(e.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>useRef Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={current}
        onChange={changeHandler}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid gray",
          outline: "none",
        }}
      />

      <h3>Current Value : {current}</h3>

      <h3>Previous Value : {previous || "None"}</h3>
    </div>
  );
};

export default Question5;
