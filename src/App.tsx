import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("app loaded");
  }, []);

  return <div>Hello</div>;
}

export default App;
