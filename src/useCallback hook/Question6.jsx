import React, { useState, useCallback } from 'react';

const Question6 = () => {
  const [list, setList] = useState([]);

  const addItem = useCallback(() => {
    setList(prev => [...prev, "Item"]);
  }, []);

  return (
    <>
      <button onClick={addItem}>Add</button>
      {list.map((i, idx) => <p key={idx}>{i}</p>)}
    </>
  );
};

export default Question6;