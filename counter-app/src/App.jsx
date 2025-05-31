import { useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const handleIncreament = () => {
    if (number < 10) {
      setNumber((prev) => prev + 1);
    }
  };

  const handleDecreament = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  return (
    <section className="counter-wrapper">
      <div className="current-number-wrapper">
        <p className="current-number">Number : {number} </p>
      </div>
      <div className="limit-alert-wrapper">
        <div className="limit-alert">
          {number === 10 && <p>You've reached the limit!</p>}
        </div>
      </div>
      <div className="control-buttons-wrapper">
        <div className="increase-button-wrapper">
          <button onClick={handleIncreament}>+</button>
        </div>
        <div className="decrease-button-wrapper">
          <button onClick={handleDecreament}>-</button>
        </div>
      </div>
    </section>
  );
}

export default App;
