import React, { useState } from "react";
import Calculator from "./Calculator";
import CounterGame from "./CounterGame";

function App() {
  const [page, setPage] = useState("calculator");

  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <h1>React SPA – index2.html</h1>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setPage("calculator")}>Számológép</button>
        <button onClick={() => setPage("counter")}>Számláló játék</button>
      </div>
      <hr />
      {page === "calculator" ? <Calculator /> : <CounterGame />}
    </div>
  );
}

export default App;
