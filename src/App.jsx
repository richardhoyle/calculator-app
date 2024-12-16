import React, { useState } from "react";
import './App.css'

function App() {
  const [input, setInput] = useState('');

  function calculateResult() {
    try {
      const result = eval(input);
      setInput(result.toString())
    } catch (error) {
      setInput('E')
    }
  }
  
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button onClick={() => setInput(input + "/")}>÷</button>

        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button onClick={() => setInput(input + "*")}>×</button>

        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button onClick={() => setInput(input + "+")}>+</button>

        <button onClick={() => setInput(input + "0")}>0</button>
        <button onClick={() => setInput("")}>C</button>
        <button onClick={() => calculateResult()}>=</button>
        <button onClick={() => setInput(input + "-")}>-</button>
      </div>
    </div>
  );
}

export default App;