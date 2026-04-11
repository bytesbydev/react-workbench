import React, { useState, useCallback } from 'react';

const Question5 = () => {
  const [on, setOn] = useState(false);

  const toggle = useCallback(() => {
    setOn(prev => !prev);
  }, []);

  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
};

export default Question5;