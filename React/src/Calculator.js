import React, { useState } from "react";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (op) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("Hibás bemenet!");
      return;
    }

    let res;
    switch (op) {
      case "+": res = numA + numB; break;
      case "-": res = numA - numB; break;
      case "*": res = numA * numB; break;
      case "/": res = numB !== 0 ? numA / numB : "Nullával osztás!"; break;
      default: res = "Ismeretlen művelet!";
    }
    setResult(res);
  };

  return (
    <div>
      <h2>Számológép</h2>
      <input value={a} onChange={e => setA(e.target.value)} placeholder="Első szám" />
      <input value={b} onChange={e => setB(e.target.value)} placeholder="Második szám" />
      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>×</button>
        <button onClick={() => calculate("/")}>÷</button>
      </div>
      {result !== null && <p>Eredmény: {result}</p>}
    </div>
  );
}

export default Calculator;
