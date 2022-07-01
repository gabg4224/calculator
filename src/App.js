import "./App.css";
import Button from "./components/Button";
import imagen from "./images/logo.png";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import Logo from "./components/Logo";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const takeValue = (val) => {
    setInput(input + val);
  };

  const result = () => {
    if (input === "") {
      setInput("");
    } else {
      try {
        setInput(evaluate(input));
      } catch (error) {
        alert("no te pases de pillo");
        setInput("");
      }
    }
  };

  const del = () => {
    if (input.length > 1) {
      setInput(input.slice(0, -1));
    } else {
      setInput("");
    }
  };

  return (
    <div className="App">
      <Logo name="logo" source={imagen} />

      <div className="calculatorContainer">
        <Screen input={input} />
        <div className="fila">
          <Button clickController={takeValue}>1</Button>
          <Button clickController={takeValue}>2</Button>
          <Button clickController={takeValue}>3</Button>
          <Button clickController={takeValue}>+</Button>
        </div>
        <div className="fila">
          <Button clickController={takeValue}>4</Button>
          <Button clickController={takeValue}>5</Button>
          <Button clickController={takeValue}>6</Button>
          <Button clickController={takeValue}>-</Button>
        </div>
        <div className="fila">
          <Button clickController={takeValue}>7</Button>
          <Button clickController={takeValue}>8</Button>
          <Button clickController={takeValue}>9</Button>
          <Button clickController={takeValue}>*</Button>
        </div>
        <div className="fila">
          <Button clickController={result}>=</Button>
          <Button clickController={takeValue}>0</Button>
          <Button clickController={takeValue}>.</Button>
          <Button clickController={takeValue}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear clickController={() => setInput("")}>CLEAR</ButtonClear>
          <ButtonClear clickController={del}>del</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
