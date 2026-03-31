import React, { useState, useCallback } from 'react';

const Question8 = () => {
  const [user, setUser] = useState({ name: "Dev" });

const changeName = useCallback(() => {
  setUser(prev => ({
    ...prev,
    name: prev.name === "Dev" ? "Updated" : "Dev"
  }));
}, []);
 return (
  <>
    <button onClick={changeName}>
      {user.name}
    </button>

    <p>Current User: {user.name}</p>
  </>
);};
export default Question8;