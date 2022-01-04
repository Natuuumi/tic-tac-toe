const ticTacToe = (function() {
	let boxSelection = document.querySelectorAll('.gameSquare');
	let boxArray = [ ...boxSelection ];
	console.log(boxArray);

	gameBoard = {
		currentPlayer: 'X',
		board: [ '', '', '', '', '', '', '', '', '' ]
	};
	function renderGame() {
		boxArray.forEach((e) => {
			e.textContent = gameBoard.board[boxArray.indexOf(e)];
		});
	}
	function selection() {
		boxArray.forEach((element) => {
			element.addEventListener('click', () => {
				if (gameBoard.board[boxArray.indexOf(element)] === '') {
					gameBoard.board[boxArray.indexOf(element)] = gameBoard.currentPlayer;
					renderGame();
					if (gameBoard.currentPlayer === 'X') {
						gameBoard.currentPlayer = 'O';
					} else {
						gameBoard.currentPlayer = 'X';
					}
				}
			});
		});
	}
	selection();

	return {
		render: renderGame
	};
})();
ticTacToe.render();
