import { useState } from "react";
import "./App.css";

function App() {
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setCurState(e.target.innerText);
      setTotal(false);
    } else {
      setCurState((prev) => prev + e.target.innerText);
    }
  };

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    setInput(curState + " " + e.target.innerText);
    setCurState("");
  };

  const equals = () => {
    if (!operator) return;

    const prev = parseFloat(input);
    const current = parseFloat(curState);

    let result;
    switch (operator) {
      case "/":
        result = prev / current;
        break;
      case "+":
        result = prev + current;
        break;
      case "X":
        result = prev * current;
        break;
      case "-":
        result = prev - current;
        break;
      default:
        return;
    }

    setInput(result);
    setCurState(result.toString());
    setTotal(true);
  };

  const reset = () => {
    setCurState("");
    setInput("0");
    setOperator(null);
    setTotal(false);
  };

  const deleteLast = () => {
    setCurState((prev) => prev.slice(0, -1));
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    setCurState((prev) => (parseFloat(prev) / 100).toString());
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='screen'>{curState || input}</div>
        <div className='btn light-gray' onClick={reset}>
          AC
        </div>
        <div className='btn light-gray' onClick={deleteLast}>
          DEL
        </div>
        <div className='btn light-gray' onClick={percent}>
          %
        </div>
        <div className='btn orange' onClick={operatorType}>
          /
        </div>
        <div className='btn' onClick={inputNum}>
          7
        </div>
        <div className='btn' onClick={inputNum}>
          8
        </div>
        <div className='btn' onClick={inputNum}>
          9
        </div>
        <div className='btn orange' onClick={operatorType}>
          X
        </div>
        <div className='btn' onClick={inputNum}>
          4
        </div>
        <div className='btn' onClick={inputNum}>
          5
        </div>
        <div className='btn' onClick={inputNum}>
          6
        </div>
        <div className='btn orange' onClick={operatorType}>
          +
        </div>
        <div className='btn' onClick={inputNum}>
          1
        </div>
        <div className='btn' onClick={inputNum}>
          2
        </div>
        <div className='btn' onClick={inputNum}>
          3
        </div>
        <div className='btn orange' onClick={operatorType}>
          -
        </div>
        <div className='btn zero' onClick={inputNum}>
          0
        </div>
        <div className='btn' onClick={inputNum}>
          .
        </div>
        <div className='btn' onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
