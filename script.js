const ticTacToe = (function () {
  let gameText = document.querySelector("#gameText");
  let boxSelection = document.querySelectorAll(".gameSquare");
  let boxArray = [...boxSelection];

  gameBoard = {
    currentPlayer: "X",
    board: ["", "", "", "", "", "", "", "", ""],
  };

  function renderGame() {
    boxArray.forEach((e) => {
      e.textContent = gameBoard.board[boxArray.indexOf(e)];
    });
  }

  function checkForDraw(box) {
    return box != "";
  }

  function checkWinner() {
    if (gameBoard.board.every(checkForDraw)) {
      gameText.textContent = "DRAW";
    } else {
    }
    //logic for X
    if (
      //horizontal rows
      (gameBoard.board[0] === "X" &&
        gameBoard.board[1] === "X" &&
        gameBoard.board[2] === "X") ||
      (gameBoard.board[3] === "X" &&
        gameBoard.board[4] === "X" &&
        gameBoard.board[5] === "X") ||
      (gameBoard.board[6] === "X" &&
        gameBoard.board[7] === "X" &&
        gameBoard.board[8] === "X") ||
      //vertical rows
      (gameBoard.board[0] === "X" &&
        gameBoard.board[3] === "X" &&
        gameBoard.board[6] === "X") ||
      (gameBoard.board[1] === "X" &&
        gameBoard.board[4] === "X" &&
        gameBoard.board[7] === "X") ||
      (gameBoard.board[2] === "X" &&
        gameBoard.board[5] === "X" &&
        gameBoard.board[8] === "X") ||
      //diagonal
      (gameBoard.board[0] === "X" &&
        gameBoard.board[4] === "X" &&
        gameBoard.board[8] === "X") ||
      (gameBoard.board[2] === "X" &&
        gameBoard.board[4] === "X" &&
        gameBoard.board[6] === "X")
    ) {
      gameText.textContent = "X WON";
    }
    //logic for O
    if (
      //horizontal rows
      (gameBoard.board[0] === "O" &&
        gameBoard.board[1] === "O" &&
        gameBoard.board[2] === "O") ||
      (gameBoard.board[3] === "O" &&
        gameBoard.board[4] === "O" &&
        gameBoard.board[5] === "O") ||
      (gameBoard.board[6] === "O" &&
        gameBoard.board[7] === "O" &&
        gameBoard.board[8] === "O") ||
      //vertical rows
      (gameBoard.board[0] === "O" &&
        gameBoard.board[3] === "O" &&
        gameBoard.board[6] === "O") ||
      (gameBoard.board[1] === "O" &&
        gameBoard.board[4] === "O" &&
        gameBoard.board[7] === "O") ||
      (gameBoard.board[2] === "O" &&
        gameBoard.board[5] === "O" &&
        gameBoard.board[8] === "O") ||
      //diagonal
      (gameBoard.board[0] === "O" &&
        gameBoard.board[4] === "O" &&
        gameBoard.board[8] === "O") ||
      (gameBoard.board[2] === "O" &&
        gameBoard.board[4] === "O" &&
        gameBoard.board[6] === "O")
    ) {
      gameText.textContent = "O WON";
    }
  }
  return {
    Play() {
      boxArray.forEach((element) => {
        element.addEventListener("click", () => {
          if (gameBoard.board[boxArray.indexOf(element)] === "") {
            gameBoard.board[boxArray.indexOf(element)] =
              gameBoard.currentPlayer;
            renderGame();
            checkWinner();
            if (gameBoard.currentPlayer === "X") {
              gameBoard.currentPlayer = "O";
            } else {
              gameBoard.currentPlayer = "X";
            }
          }
        });
      });
    },
  };
})();
ticTacToe.Play();
