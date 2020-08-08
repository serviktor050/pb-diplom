const players = ['x', 'o'];
let activePlayer = 0;
let board;

// Начало игры

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  activePlayer = 0;
  renderBoard(board);
}

// Пользователь кликнул  в поле

function choosePlayer() {
  activePlayer = (activePlayer + 1) % players.length;
  return activePlayer;
}

function click(row, column) {
  board[row][column] = players[activePlayer];
  renderBoard(board);

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[i][0] === players[activePlayer] && board[i][1] === players[activePlayer]
        && board[i][2] === players[activePlayer]) {
        showWinner(activePlayer);
      } else if (board[0][j] === players[activePlayer]
        && board[1][j] === players[activePlayer] && board[2][j] === players[activePlayer]) {
        showWinner(activePlayer);
      } else if (board[0][0] === players[activePlayer]
        && board[1][1] === players[activePlayer] && board[2][2] === players[activePlayer]) {
        showWinner(activePlayer);
      } else if (board[0][2] === players[activePlayer]
        && board[1][1] === players[activePlayer] && board[2][0] === players[activePlayer]) {
        showWinner(activePlayer);
      } else {
        choosePlayer();
      }
    }
  }
}
