import React, { useEffect, useState } from "react";

const Question8 = () => {
  const [color, setColor] = useState("white");

  useEffect(() => {
    const previousColor = document.body.style.background;

    document.body.style.background = color;

    return () => {
      document.body.style.background = previousColor;
    };
  }, [color]);

  const buttonStyle = {
    padding: "10px 15px",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    border: "none",
    marginBottom: "10px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        style={{ ...buttonStyle, backgroundColor: "green" }}
        onClick={() => setColor("lightgreen")}
      >
        Green
      </button>

      <br />

      <button
        style={{ ...buttonStyle, backgroundColor: "blue" }}
        onClick={() => setColor("lightblue")}
      >
        Blue
      </button>

      <br />

      <button
        style={{ ...buttonStyle, backgroundColor: "gray" }}
        onClick={() => setColor("white")}
      >
        Reset
      </button>
    </div>
  );
};

export default Question8;