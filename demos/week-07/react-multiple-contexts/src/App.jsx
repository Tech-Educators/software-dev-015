import NavBar from "./components/NavBar";
import RandomComponent from "./components/RandomComponent";
import { useState } from "react";
export default function App() {

  const [count,setCount] = useState(0)

  const addCount = () => setCount(count + 1)

  return (
    <div>
        <NavBar count={count} toggleCount={addCount}/>
        <RandomComponent />
    </div>
  )
}