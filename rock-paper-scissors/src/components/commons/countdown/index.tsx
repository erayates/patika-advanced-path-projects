import { useEffect, useState } from "react";

function Countdown({ setGameStatus, gameStatus }: any) {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const counter = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    const closeCountdown = setTimeout(() => {
      setGameStatus((prev: object) => ({
        ...prev,
        openCountdown: false,
        showResults: true,
      }));
    }, 3000);

    return () => {
      clearInterval(counter);
      clearTimeout(closeCountdown);
    };
  }, []);

  return (
    <div className="flex justify-evenly items-center mt-12">
      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-xl">You Picked</p>
        <div
          className={`playground-item--large playground-item--${gameStatus.userSelection}`}
        ></div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-xl">The House Picked</p>
        <p className="text-white font-bold text-[120px] bg-[#142137] rounded-full leading-none h-[240px] w-[240px] flex justify-center items-center">
          {timer}
        </p>
      </div>
    </div>
  );
}

export default Countdown;
