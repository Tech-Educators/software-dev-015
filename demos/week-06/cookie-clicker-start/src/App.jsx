import { useState, useEffect } from "react";
import UpgradeButton from "./components/UpgradeButton";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1); // Cookies Per Second

  useEffect(() => {
    const interval = setInterval(() => {
      // the callback function inside setCookies gets the CURRENT value of the state variable
      // and returns a value that is the current + 1
      setCookies((current) => current + cps);
    }, 1000);

    return () => clearInterval(interval);
  }, [cps]);

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  function buyUpgrade() {
    setCps(cps + 1);
  }

  return (
    <div>
      <h1>Cookie Clicker</h1>
      <button onClick={incrementCookies}>
        Pretend I am a picture of a cookie
      </button>
      <p>Cookies: {cookies}</p>
      <p>CPS (Cookies Per Second): {cps}</p>
      <UpgradeButton buyUpgrade={buyUpgrade} />
    </div>
  );
}
