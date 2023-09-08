import { useState } from "react";
import Countries from "./components/countries";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Countries></Countries>
    </>
  );
}

export default App;
