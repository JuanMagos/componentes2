import { useState } from 'react';

const Counter = () => {
  const [initialState, setInitialState] = useState(0);

  console.log('ME rendedrizo de nuevo');
  const suma = () => {
    setInitialState(initialState + 1);
  };

  return (
    <div>
      Counter
      <h3>{initialState}</h3>
      <button onClick={suma}>Suma uno</button>
    </div>
  );
};

export default Counter;
