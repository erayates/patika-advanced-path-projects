import { isUserWin } from "../../../utils/helpers";

const choices = ["rock", "paper", "scissors"];

const Playground = ({ setGameStatus, setScore }: any) => {
  const handleChangeGameStatus = (winnerText: string) => {
    setGameStatus((prev: object) => ({
      ...prev,
      winner: winnerText,
    }));
  };

  const handleChangeScore = (win: boolean) => {
    setTimeout(() => {
      win
        ? setScore((prev: number) => prev + 1)
        : setScore((prev: number) => prev - 1);
    }, 3000);
  };

  const handleUserSelect = (selection: string) => {
    const aiSelection = choices[Math.floor(Math.random() * 3)];
    setGameStatus((prev: object) => ({
      ...prev,
      openCountdown: true,
      userSelection: selection,
      aiSelection: aiSelection,
    }));

    if (isUserWin(aiSelection, selection) === 0) {
      handleChangeGameStatus("Draw");
      return;
    }

    if (isUserWin(aiSelection, selection)) {
      handleChangeGameStatus("You Win");
      handleChangeScore(true);
      return;
    }

    if (!isUserWin(aiSelection, selection)) {
      handleChangeGameStatus("You Lose");
      handleChangeScore(false);
      return;
    }
  };

  return (
    <>
      <div className="playground flex flex-col relative  items-center mt-[10rem]">
        <img
          src="../images/bg-triangle.svg"
          alt="bg-triangle"
          className="playground-triangle w-[350px]"
        />
        <div className="playground-items">
          <div className="flex top-[-50px] gap-20 absolute">
            <div
              className="playground-item playground-item--paper"
              onClick={() => handleUserSelect("paper")}
            ></div>
            <div
              className="playground-item playground-item--rock"
              onClick={() => handleUserSelect("rock")}
            ></div>
          </div>
          <div
            className="playground-item playground-item--scissors absolute bottom-0"
            onClick={() => handleUserSelect("scissors")}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Playground;
