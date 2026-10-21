import "./App.css";
import { useState } from "react";

function App() {
  let [number, setNumber] = useState(0);

  function normalUpdateCount() {
    setNumber(number + 1);
  }

  function decreaseCount() {
    setNumber(number - 1);
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