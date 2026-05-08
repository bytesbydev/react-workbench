import React, { useMemo, useState } from "react";

const names = [
  "anshika",
  "dev",
  "aloo",
  "alia",
  "aaraav",
  "vicku",
  "rohit",
];

const Question8 = () => {
  const [text, setText] = useState("");

  const result = useMemo(() => {
    console.log("filtering...");

    return names.filter((n) =>
      n.toLowerCase().startsWith(text.toLowerCase())
    );
  }, [text]);

  return (
    <div>
      {result.map((num, index) => (
        <p key={index}>{num}</p>
      ))}

      <br />

      text: {text}

      <br />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Question8;