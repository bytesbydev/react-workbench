import React, { useState, useCallback } from 'react';

const Question5 = () => {
  const [on, setOn] = useState(false);

  const toggle = useCallback(() => {
    setOn(prev => !prev);
  }, []);

return (
  <>
    <h2>Toggle Button</h2>

    <button onClick={toggle}>
      {on ? "ON" : "OFF"}
    </button>

    <p>Status: {on ? "Enabled" : "Disabled"}</p>
  </>
);
};

export default Question5;