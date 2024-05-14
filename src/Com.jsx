import { useContext } from "react";
import { counter } from "./context/context";

function Com() {
  const { count, setCount } = useContext(counter);
  return (
    <div>
      <h1>The count is : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incre
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decre
      </button>
    </div>
  );
}

export default Com;
