function Results({ gameStatus, setGameStatus }: any) {
  return (
    <div className="flex justify-evenly items-center mt-12">
      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-xl">You Picked</p>
        <div
          className={`playground-item--large playground-item--${gameStatus.userSelection}`}
        ></div>
      </div>

      <div>
        <p className="uppercase text-[36px] font-bold">{gameStatus.winner}</p>
        <button
          onClick={() =>
            setGameStatus((prev: any) => ({ ...prev, showResults: false }))
          }
          className="uppercase bg-white rounded-lg px-4 py-2 text-[#171F41] font-bold text-sm"
        >
          Play Again
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-xl">The House Picked</p>
        <div
          className={`playground-item--large playground-item--${gameStatus.aiSelection}`}
        ></div>
      </div>
    </div>
  );
}

export default Results;
