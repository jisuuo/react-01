import "./App.css";
import { useState } from "react";

const MyComponent = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("Incremented count:", count + 1);
  };

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

function App() {
  return <MyComponent />;
}

export default App;
