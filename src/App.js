import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const increseBy5 = () => {
    setCount(count + 5);
  };

  const decreaseBy5 = () => {
    setCount(count - 5);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <br />
      <button onClick={decreaseBy5}>Decrease by 5</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>Increase</button>
      <button onClick={increseBy5}>Increase by 5</button>

    </div>
  );
}

export default App;