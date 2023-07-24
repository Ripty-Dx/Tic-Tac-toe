import React, { useEffect, useState } from "react";
import PlayerButton from "./PlayerButton";
import "./Logo.css";
import "./SquareBoard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SquareBoard = ({ xName, oName }) => {
  const [newGameClicked, setNewGameClicked] = useState(false);
  const [playerX, setPlayerX] = useState(true);
  const [squareValue, setSquareValue] = useState(new Array(9).fill(null));
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);

  const restartGame = () => {
    // console.log("restart");
    setSquareValue(squareValue.fill(null));
    // console.log(squareValue,playerX);
    setPlayerX(!playerX);
    toast.dismiss();
  };
  const newGame = () => {
    setNewGameClicked(true);
    if (newGameClicked) {
      document.getElementById("newGameButton").style.display = "none";
    }
  };
  const quitGame = () => {
    setNewGameClicked(false);
    setOScore(0);
    setDrawScore(0);
    setXScore(0);
    setSquareValue(squareValue.fill(null));
    toast.dismiss();
    document.getElementById("xNameID").innerText = "PLAYER X";
    document.getElementById("oNameID").innerText = "PLAYER O";
    
  };
  const calculateWinner = (squareValue) => {
    if (squareValue == null) return null;
    // console.log("calculating winner");
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        squareValue[a] &&
        squareValue[a] === squareValue[b] &&
        squareValue[a] === squareValue[c]
      ) {
        return squareValue[a];
      }
    }
    return null;
  };
  let status;
  const winner = calculateWinner(squareValue);
  // console.log("winner",winner);
  if (winner) {
    status = "Game Over!!! Winner " + winner;
    // setNewGameClicked(false);
    document.getElementById("newGameButton").style.display = "flex";
    // console.log( winnerIs.X+1);
  } else {
    status = (playerX ? "X" : "O") + " turn";
  }
  const handleClick = (i) => {
    if (squareValue[i] || calculateWinner(squareValue) || !newGameClicked) {
      return;
    }
    const nextSquares = squareValue.slice();
    if (playerX) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquareValue(nextSquares);
    setPlayerX(!playerX);
    // setNewGameClicked(false);
  };
  var allSquareValuesFilled = false;
  var drawScoreCheck = false;
  if (!squareValue.includes(null)) {
    allSquareValuesFilled = true;
    if (winner == null) {
      drawScoreCheck = true;
    }
    // console.log(sqvalue);
  }

  useEffect(() => {
    if (winner === "X") {
      setXScore(xScore + 1);
      toast.success("Winner X !!!", {
        theme: "colored",
        className: "bg-blue",
      });
    } else if (winner === "O") {
      setOScore(oScore + 1);
      toast.success("Winner O !!!", {
        theme: "colored",
        className: "bg-yellow",
      });
    }
    if (drawScoreCheck) {
      setDrawScore(drawScore + 1);
      toast.info("Draw !!!", {
        theme: "colored",
        className: "draw-toast",
      });
    }
  }, [winner, drawScoreCheck]);
  return (
    <>
      <div className="p-5 game-area">
        <div className="history gap-3">
          <div className="bg-blue p-2">
            <div id="xNameID">
              {xName ? xName.toUpperCase().trim().substring(0, 10) : "PLAYER X"}
            </div>
            <div className="score">{xScore}</div>
          </div>
          <div className=" p-2" style={{ backgroundColor: "#BCDBF9" }}>
            <div>DRAW</div>
            <div className="score">{drawScore}</div>
          </div>
          <div className="bg-yellow p-2">
            <div id="oNameID">
              {oName ? oName.toUpperCase().trim().substring(0, 10) : "PLAYER O"}
            </div>
            <div className="score">{oScore}</div>
          </div>
        </div>
        <div>
          <div className="board">
            <div className=" mt-4">
              <PlayerButton
                value={squareValue[0]}
                onSquareClick={() => {
                  handleClick(0);
                }}
              />
              <PlayerButton
                value={squareValue[1]}
                onSquareClick={() => {
                  handleClick(1);
                }}
              />
              <PlayerButton
                value={squareValue[2]}
                onSquareClick={() => {
                  handleClick(2);
                }}
              />
            </div>
            <div className="">
              <PlayerButton
                value={squareValue[3]}
                onSquareClick={() => {
                  handleClick(3);
                }}
              />
              <PlayerButton
                value={squareValue[4]}
                onSquareClick={() => {
                  handleClick(4);
                }}
              />
              <PlayerButton
                value={squareValue[5]}
                onSquareClick={() => {
                  handleClick(5);
                }}
              />
            </div>
            <div className="">
              <PlayerButton
                value={squareValue[6]}
                onSquareClick={() => {
                  handleClick(6);
                }}
              />
              <PlayerButton
                value={squareValue[7]}
                onSquareClick={() => {
                  handleClick(7);
                }}
              />
              <PlayerButton
                value={squareValue[8]}
                onSquareClick={() => {
                  handleClick(8);
                }}
              />
            </div>
          </div>
          {newGameClicked ? (
            winner ? (
              <div
                className="bg-success text-white fw-normal"
                id="newGameButton"
              >
                {status}
              </div>
            ) : squareValue.includes(null) ? (
              playerX ? (
                <div className="bg-blue text-dark" id="newGameButton">
                  {status}
                </div>
              ) : (
                <div className="bg-yellow text-dark" id="newGameButton">
                  {status}
                </div>
              )
            ) : (
              <div
                className="bg-danger  bg-gradient text-white"
                id="newGameButton"
              >
                Draw!!!
              </div>
            )
          ) : (
            ""
          )}{" "}
        </div>
        {/* new game button*/}
        {newGameClicked ? (
          <>
            <button id="newGameButton" className="mt-2" onClick={restartGame}>
              Restart Game
            </button>
            <button className="mt-2 quit" onClick={quitGame}>
              Quit
            </button>
          </>
        ) : (
          <button onClick={newGame} id="newGameButton">
            New Game
          </button>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default SquareBoard;
