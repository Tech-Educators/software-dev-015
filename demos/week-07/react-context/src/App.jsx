import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { MyProvider } from "./context/Context";

export default function App() {
  return (
    <MyProvider>
      {/* The below div is the children for our provider */}
      <div>
        <Header />
        <Button text="Increment" />
      </div>
    </MyProvider>
  );
}
