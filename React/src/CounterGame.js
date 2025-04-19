import React, { useState } from "react";

function CounterGame() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Számláló játék</h2>
      <p>Szám: {count}</p>
      <button onClick={() => setCount(count + 1)}>Növel</button>
      <button onClick={() => setCount(0)}>Nulláz</button>
      {count >= 10 && <p>🎉 Gratulálok, elérted a 10-et!</p>}
    </div>
  );
}

export default CounterGame;
