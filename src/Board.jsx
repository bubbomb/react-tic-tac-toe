import Square from "./components/Square";
import { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);

  let status = `Next player: ${xIsNext ? "X" : "O"}`;
  const winner = calculateWinner(squares);
  if (winner) {
    status = `Winner: ${winner}`;
  }

  const updateSquare = (squareIndex) => {
    if (squares[squareIndex] || winner) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[squareIndex] = "X";
    } else {
      nextSquares[squareIndex] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => updateSquare(0)} />
        <Square value={squares[1]} handleClick={() => updateSquare(1)} />
        <Square value={squares[2]} handleClick={() => updateSquare(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => updateSquare(3)} />
        <Square value={squares[4]} handleClick={() => updateSquare(4)} />
        <Square value={squares[5]} handleClick={() => updateSquare(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => updateSquare(6)} />
        <Square value={squares[7]} handleClick={() => updateSquare(7)} />
        <Square value={squares[8]} handleClick={() => updateSquare(8)} />
      </div>
    </>
  );
};

const calculateWinner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of winningLines) {
    const [a, b, c] = line;

    const box1 = squares[a];
    const box2 = squares[b];
    const box3 = squares[c];
    if (box1 && box1 === box2 && box1 === box3) {
      return box1;
    }
  }
  return null;
};

export default Board;
