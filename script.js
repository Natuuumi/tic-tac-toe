const ticTacToe = (function () {
  const gameText = document.querySelector("#gameText");
  const boxSelection = document.querySelectorAll(".gameSquare");
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    gameBoard.player1.currentPlayer = true;
    gameBoard.player2.currentPlayer = false;
    gameBoard.board = ["", "", "", "", "", "", "", "", ""];
    gameText.textContent = gameBoard.player1.name + "'s turn";
    Play();
    renderGame();
  });
  let boxArray = [...boxSelection];

  function startPage() {
    const startButton = document.querySelector("#start");
    const player1Input = document.querySelector("#player1");
    const player2Input = document.querySelector("#player2");
    const startingPage = document.querySelector("#startingPage");
    const mainGame = document.querySelector("#mainGame");

    startButton.addEventListener("click", (e) => {
      if (player1Input.value != "" && player2Input.value != "") {
        gameBoard.player1.name = player1Input.value;
        gameBoard.player2.name = player2Input.value;
        gameText.textContent = gameBoard.player1.name + "'s turn";
        startingPage.setAttribute("class", "removeDisplay");
        mainGame.removeAttribute("class", "removeDisplay");
        Play();
      }
    });
  }
  startPage();

  let gameBoard = {
    player1: { name: "player 1", value: "X", currentPlayer: true },
    player2: { name: "player 2", value: "O", currentPlayer: false },
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
      endGame();
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
      gameText.textContent = gameBoard.player1.name + " WON";
      endGame();
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
      gameText.textContent = gameBoard.player2.name + " WON";
      endGame();
    }
  }
  function endGame() {
    boxArray.forEach((element) => {
      element.removeEventListener("click", currentPlayer);
    });
  }
  function currentPlayer() {
    if (gameBoard.board[boxArray.indexOf(this)] === "") {
      if (gameBoard.player1.currentPlayer === true) {
        gameBoard.board[boxArray.indexOf(this)] = gameBoard.player1.value;
        gameBoard.player1.currentPlayer = false;
        gameBoard.player2.currentPlayer = true;
        gameText.textContent = gameBoard.player2.name + "'s turn";
      } else {
        gameBoard.board[boxArray.indexOf(this)] = gameBoard.player2.value;
        gameBoard.player1.currentPlayer = true;
        gameBoard.player2.currentPlayer = false;
        gameText.textContent = gameBoard.player1.name + "'s turn";
      }
    }
    renderGame();
    checkWinner();
  }

  function boxEventListeners() {
    boxArray.forEach((element) => {
      element.addEventListener("click", currentPlayer);
    });
  }
  function Play() {
    boxEventListeners();
  }
  return {
    gameBoard: gameBoard,
  };
})();
