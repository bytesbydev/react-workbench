import React, { useRef, useState } from "react";

const Question5 = () => {

  const previousValue = useRef("");

  const [current, setCurrent] = useState("");

  const changeHandler = (e) => {

    previousValue.current = current;

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

      <h3>Previous Value : {previousValue.current}</h3>

    </div>
  );
};

export default Question5;