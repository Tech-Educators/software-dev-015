import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((current) => current + 1);
    }, 1000);
    // stop the timer in the "cleanup" so we don't end up with multiple timers
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>timers in react</h1>
      <p>Count: {count}</p>
    </div>
  );
}
