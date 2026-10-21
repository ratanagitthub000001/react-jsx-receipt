import "./App.css";
import { useState } from "react";

function App() {
  let [number, setNumber] = useState(0);

  function normalUpdateCount() {
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number * 10 * 3);
  }

  function decreaseCount() {
    setNumber((number) => number / 3);
  }

  return (
    <>
      <div id="center">
        <button onClick={normalUpdateCount}>Counter {number}</button>
        <button onClick={decreaseCount}>Decrease {number}</button>
      </div>
    </>
  );
}

export default App;