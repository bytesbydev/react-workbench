import React, { useState, useCallback } from 'react';

const Question4 = () => {
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return <input value={text} onChange={handleChange} />;
};

export default Question4;