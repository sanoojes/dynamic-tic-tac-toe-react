import { useEffect, useState } from "react";

function createInitialBoard(size: number) {
  return Array(size * size).fill(null);
}

function checkWinner(board: Array<string | null>, size: number) {
  const lines = [];

  // Rows
  for (let i = 0; i < size; i++) {
    lines.push(board.slice(i * size, (i + 1) * size));
  }

  // Columns
  for (let i = 0; i < size; i++) {
    const col = [];
    for (let j = 0; j < size; j++) {
      col.push(board[i + j * size]);
    }
    lines.push(col);
  }

  // Diagonals
  const diag1 = [];
  const diag2 = [];
  for (let i = 0; i < size; i++) {
    diag1.push(board[i * (size + 1)]);
    diag2.push(board[(i + 1) * (size - 1)]);
  }
  lines.push(diag1, diag2);

  // Check all lines for winner
  for (const line of lines) {
    if (line.every((val) => val === line[0] && val !== null)) {
      return line[0];
    }
  }

  return null;
}

const useTicTacToe = (boardSize = 3) => {
  const [board, setBoard] = useState(() => createInitialBoard(boardSize));
  const [turn, setTurn] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [message, setMessage] = useState(`Player X's turn`);

  // Effect to reset the game when boardSize changes
  useEffect(() => {
    setBoard(createInitialBoard(boardSize));
    setTurn("X");
    setIsGameOver(false);
    setMessage("Player X's turn");
  }, [boardSize]);

  const handleClick = (idx: number) => {
    if (board[idx] || isGameOver) return;

    const newBoard = [...board];
    newBoard[idx] = turn;

    // Check for winner or if the board is full
    const winner = checkWinner(newBoard, boardSize);
    const boardFull = newBoard.every((square) => square !== null);

    setBoard(newBoard);
    if (winner) {
      setIsGameOver(true);
      setMessage(`Player ${winner} wins!`);
    } else if (boardFull) {
      setIsGameOver(true);
      setMessage("It's a draw!");
    } else {
      const nextTurn = turn === "X" ? "O" : "X";
      setTurn(nextTurn);
      setMessage(`Player ${nextTurn}'s turn`);
    }
  };

  const resetGame = () => {
    setBoard(createInitialBoard(boardSize));
    setTurn("X");
    setIsGameOver(false);
    setMessage("Player X's turn");
  };

  return { turn, handleClick, isGameOver, board, message, resetGame };
};

export default useTicTacToe;
