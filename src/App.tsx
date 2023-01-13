import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(123456789);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">{ count }</h1>
    </div>
  );
}

export default App;
