// import Com from "./Com";
import { useState } from "react";
import { counter } from "./context/context";
import Com from "./Com";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <counter.Provider value={{ count, setCount }}>
        <Com />
        <Com />
        <Com />
        <Com />
      </counter.Provider>
    </>
  );
}

export default App;
