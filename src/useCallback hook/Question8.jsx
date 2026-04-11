import React, { useState, useCallback } from 'react';

const Question8 = () => {
  const [user, setUser] = useState({ name: "Dev" });

  const changeName = useCallback(() => {
    setUser(prev => ({ ...prev, name: "Updated" }));
  }, []);

  return <button onClick={changeName}>{user.name}</button>;
};

export default Question8;