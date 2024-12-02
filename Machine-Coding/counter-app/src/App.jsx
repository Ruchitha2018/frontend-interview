import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if(count > 0 ) {
      setCount((prev) => prev - 1);
    }
   
  };
  const reset = () => {
    setCount(0)
  }
  return (
    <>
      <h1>Day 1: Counter App</h1>
      <div>
        <h3>{count}</h3>
        <div className="btn-flex">
          <button className="btn btn-primary" onClick={increment}>
            Increment
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-success" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
