import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    if (count === 10) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}
