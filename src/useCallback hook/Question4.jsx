import React, { useState, useCallback } from 'react';

const Question4 = () => {
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

return (
  <>
    <input
      value={text}
      onChange={handleChange}
      placeholder="Type something..."
    />

    <p>You typed: {text}</p>
  </>
);
};

export default Question4;