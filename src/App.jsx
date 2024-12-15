import React, { useState } from "react";

function App() {
  const [input, setInput] = useState('');

  function calculateResult() {
    
  }
  
  return (
    <div className="calculator">
      <div classname="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button onClick={() => setInput(input + "0")}>0</button>
        <button onClick={() => setInput(input + "+")}>+</button>
        <button onClick={() => setInput(input + "-")}>-</button>
        <button onClick={() => setInput(input + "*")}>×</button>
        <button onClick={() => setInput(input + "/")}>÷</button>
        <button onClick={() => setInput("")}>C</button>
        <button onClick={() => calculateResult ()} >=</button>
      </div>
    </div>
  );
}

export default App;