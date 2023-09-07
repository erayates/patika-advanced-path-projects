import { useState } from "react";
import "./App.css";
import PlaygroundContainer from "./components/containers/playground-container";
import Header from "./components/layouts/Header";

function App() {
  const [score, setScore] = useState<number>(0);

  return (
    <div className="container max-w-3xl">
      <Header score={score} />
      <PlaygroundContainer setScore={setScore} />
    </div>
  );
}

export default App;
