import { useState } from "react";
import Playground from "../../commons/playground";
import Countdown from "../../commons/countdown";
import Results from "../../commons/results";

function PlaygroundContainer({ setScore }: any) {
  const [gameStatus, setGameStatus] = useState({
    winner: "",
    openCountdown: false,
    showResults: false,
    userSelection: "",
    aiSelection: "",
  });

  if (gameStatus.openCountdown) {
    return <Countdown setGameStatus={setGameStatus} gameStatus={gameStatus} />;
  }

  if (gameStatus.showResults) {
    return <Results gameStatus={gameStatus} setGameStatus={setGameStatus} />;
  }

  return <Playground setGameStatus={setGameStatus} setScore={setScore} />;
}

export default PlaygroundContainer;
