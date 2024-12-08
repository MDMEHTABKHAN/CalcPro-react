import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const appendToDisplay = (value) => {
    if (display === "0") {
      setDisplay(value === "()" ? "()" : value);
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
  };

  const deleteLast = () => {
    setDisplay((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
  };

  const calculateResult = () => {
    try {
      setDisplay(
        String(eval(display.replace("×", "*").replace("÷", "/")))
      );
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-80">
        <div className="bg-black text-teal-400 text-right text-3xl rounded-md p-4 mb-4">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button className="btn" onClick={clearDisplay}>
            AC
          </button>
          <button className="btn" onClick={() => appendToDisplay("()")}>
            ()
          </button>
          <button className="btn" onClick={() => appendToDisplay("%")}>
            %
          </button>
          <button className="btn operator" onClick={() => appendToDisplay("+")}>
            +
          </button>

          <button className="btn" onClick={() => appendToDisplay("7")}>
            7
          </button>
          <button className="btn" onClick={() => appendToDisplay("8")}>
            8
          </button>
          <button className="btn" onClick={() => appendToDisplay("9")}>
            9
          </button>
          <button className="btn operator" onClick={() => appendToDisplay("*")}>
            ×
          </button>

          <button className="btn" onClick={() => appendToDisplay("4")}>
            4
          </button>
          <button className="btn" onClick={() => appendToDisplay("5")}>
            5
          </button>
          <button className="btn" onClick={() => appendToDisplay("6")}>
            6
          </button>
          <button className="btn operator" onClick={() => appendToDisplay("-")}>
            −
          </button>

          <button className="btn" onClick={() => appendToDisplay("1")}>
            1
          </button>
          <button className="btn" onClick={() => appendToDisplay("2")}>
            2
          </button>
          <button className="btn" onClick={() => appendToDisplay("3")}>
            3
          </button>
          <button className="btn operator" onClick={() => appendToDisplay("/")}>
            ÷
          </button>

          <button className="btn" onClick={() => appendToDisplay("0")}>
            0
          </button>
          <button className="btn" onClick={() => appendToDisplay(".")}>
            .
          </button>
          <button className="btn" onClick={deleteLast}>
            ⌫
          </button>
          <button className="btn equals" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
