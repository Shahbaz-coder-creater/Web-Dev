
  const boardEl = document.getElementById('board');
  const statusEl = document.getElementById('status');
  const scoreXEl = document.getElementById('scoreX');
  const scoreOEl = document.getElementById('scoreO');
  const scoreDrawEl = document.getElementById('scoreDraw');

  const WIN_LINES = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  let cells = Array(9).fill(null);
  let currentPlayer = 'X';
  let gameOver = false;
  let scores = { X: 0, O: 0, Draw: 0 };

  function buildBoard() {
    boardEl.innerHTML = '';
    cells.forEach((val, i) => {
      const btn = document.createElement('button');
      btn.className = 'cell';
      btn.dataset.index = i;
      if (val) {
        btn.textContent = val;
        btn.classList.add(val.toLowerCase());
        btn.disabled = true;
      }
      btn.addEventListener('click', () => handleMove(i));
      boardEl.appendChild(btn);
    });
  }

  function handleMove(index) {
    if (gameOver || cells[index]) return;

    cells[index] = currentPlayer;
    buildBoard();

    const winInfo = checkWinner();
    if (winInfo) {
      endGame(winInfo);
      return;
    }

    if (cells.every(c => c)) {
      statusEl.textContent = "Match Draw!";
      scores.Draw++;
      scoreDrawEl.textContent = scores.Draw;
      gameOver = true;
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusEl.textContent = `${currentPlayer} ki baari hai`;
  }

  function checkWinner() {
    for (const line of WIN_LINES) {
      const [a, b, c] = line;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return { winner: cells[a], line };
      }
    }
    return null;
  }

  function endGame(winInfo) {
    gameOver = true;
    statusEl.textContent = `${winInfo.winner} Jeet Gaya! 🎉`;
    statusEl.classList.add('win');

    winInfo.line.forEach(i => {
      boardEl.children[i].classList.add('win-cell');
    });

    boardEl.querySelectorAll('.cell').forEach(btn => btn.disabled = true);

    scores[winInfo.winner]++;
    if (winInfo.winner === 'X') scoreXEl.textContent = scores.X;
    else scoreOEl.textContent = scores.O;
  }

  function resetGame() {
    cells = Array(9).fill(null);
    currentPlayer = 'X';
    gameOver = false;
    statusEl.textContent = 'X ki baari hai';
    statusEl.classList.remove('win');
    buildBoard();
  }

  document.getElementById('newGame').addEventListener('click', resetGame);
  document.getElementById('resetScore').addEventListener('click', () => {
    scores = { X: 0, O: 0, Draw: 0 };
    scoreXEl.textContent = 0;
    scoreOEl.textContent = 0;
    scoreDrawEl.textContent = 0;
    resetGame();
  });

  buildBoard();