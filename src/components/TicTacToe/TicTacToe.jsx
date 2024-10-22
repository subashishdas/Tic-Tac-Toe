import { useRef, useState } from "react";
import "./TicTacToe.css"; // Import the CSS for styling
import circle from "../../assets/circle.png"; // Circle image for player "o"
import cross from "../../assets/cross.png"; // Cross image for player "x"

const TicTacToe = () => {
  // State to manage the board, initialized as an empty 3x3 array
  const [board, setBoard] = useState(Array(9).fill(""));

  // State to track the number of moves (used to alternate turns between players)
  const [count, setCount] = useState(0);

  // State to lock the board when the game is won
  const [lock, setLock] = useState(false);

  // State to store the winner message or game title
  const [winnerMessage, setWinnerMessage] = useState("Tic Tac Toe");

  // Define all possible winning combinations (rows, columns, diagonals)
  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Handle a box click and update the board state
  const toggle = (index) => {
    // Prevent further actions if the board is locked or box already clicked
    if (lock || board[index]) return;
    // Copy the current board to update it immutably
    const newBoard = [...board];

    // Alternate between "x" and "o" based on the move count
    newBoard[index] = count % 2 === 0 ? "x" : "o";

    // Update the board and increment the move count
    setBoard(newBoard);
    setCount(count + 1);

    // Check if the game has been won with the new move
    if (checkWin(newBoard)) {
      won(newBoard[index]); // Handle the winning state
    }
  };

  // Check if any winning combination is met
  const checkWin = (newBoard) => {
    return winningCombinations.some(
      ([a, b, c]) =>
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
    );
  };

  // Handle the winning logic by locking the board and setting the winner message
  const won = (winner) => {
    setLock(true); // Lock the board to prevent further moves
    setWinnerMessage(
      <>
        Congratulations:
        <img src={winner === "x" ? cross : circle} alt={winner} />
        <span id={winner === "x" ? "cross" : "circle"}> Wins</span>
      </>
    );
    console.log(winner); // Log the winner for debugging purposes
  };

  // Reset the game state to start over
  const reset = () => {
    setBoard(Array(9).fill("")); // Reset the board to empty
    setCount(0); // Reset the move count
    setLock(false); // Unlock the board
    setWinnerMessage("Tic Tac Toe"); // Reset the title message
  };

  return (
    <div className="container">
      {/* Display the game title or winner message */}
      <h1 className="title">{winnerMessage}</h1>

      {/* Render the board with clickable boxes */}
      <div className="board">
        {board.map((value, index) => (
          <div className="boxes" key={index} onClick={() => toggle(index)}>
            {/* Display the corresponding image if the box is clicked */}
            {value && <img src={value === "x" ? cross : circle} alt={value} />}
          </div>
        ))}
      </div>

      {/* Reset button to start a new game */}
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
