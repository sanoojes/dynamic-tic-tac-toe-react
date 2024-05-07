import { useState } from "react";
import useTicTacToe from "../hooks/useTicTacToe";
import Card from "./ui/Card";

const TicTacToe = () => {
  const [boardSize, setBoardSize] = useState(3);
  const { handleClick, resetGame, isGameOver, board, message } =
    useTicTacToe(boardSize);

  return (
    <>
      <Card className="text-xl font-bold">{`${message}`}</Card>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
        }}
        className="border-2 border-neutral-700/30 bg-neutral-900 p-4 gap-2 rounded-lg items-center justify-center w-full"
      >
        {board.map((value, idx) => (
          <button
            className={`flex items-center justify-center aspect-square bg-neutral-950/35 font-extrabold rounded-lg border-2 border-neutral-700/40 ${
              value ? "cursor-not-allowed opacity-50" : "hover:bg-neutral-800"
            } ${boardSize > 6 ? "text-sm" : "text-[4rem]"}`}
            key={idx}
            onClick={() => (isGameOver || value ? null : handleClick(idx))}
            aria-label={`Cell ${idx + 1}: ${value || "empty"}`}
            disabled={isGameOver || value != null}
          >
            {value}
          </button>
        ))}
      </div>
      <Card>
        <label
          htmlFor="minmax-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Number
        </label>
        <input
          id="minmax-range"
          type="range"
          min="3"
          max="10"
          onChange={(e) => setBoardSize(Number(e.target.value))}
          value={boardSize}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </Card>
      <button
        className="w-full py-2 px-4 bg-neutral-800/50 text-white text-base leading-tight font-bold rounded-lg border-2 border-neutral-700/30 shadow-md hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-700/50 transition duration-150 ease-in-out"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </>
  );
};

export default TicTacToe;
