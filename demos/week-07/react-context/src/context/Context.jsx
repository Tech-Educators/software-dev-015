// import createContext (so we can create context)
import { createContext, useState } from "react";

// create our context that the user will use later
export const MyContext = createContext();

// here we create our provider (the thing that PROVIDES our CONTEXT to our app)
// We PROVIDE CONTXT by wrapping all our components in THIS component
export function MyProvider({ children }) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <MyContext.Provider value={{ count, incrementCount }}>
      {children}
    </MyContext.Provider>
  );
}
