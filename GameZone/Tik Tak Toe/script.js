let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameOver = false;

function cellClicked(index) {
    if (!gameOver && cells[index].innerHTML === '') {
        cells[index].classList.add(currentPlayer.toLowerCase());
        cells[index].innerHTML = currentPlayer;
        if (checkWinner()) {
            gameOver = true;
            document.getElementById('gameStatus').textContent = 'Player ' + currentPlayer + ' wins!';
        } else if (checkDraw()) {
            gameOver = true;
            document.getElementById('gameStatus').textContent = 'It\'s a draw!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('gameStatus').textContent = 'Player ' + currentPlayer + '\'s turn';
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    return winPatterns.some(pattern => {
        return pattern.every(index => cells[index].innerHTML === currentPlayer);
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.innerHTML !== '');
}

function restartGame() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('x', 'o');
    });
    gameOver = false;
    currentPlayer = 'X';
    document.getElementById('gameStatus').textContent = 'Player X\'s turn';
}
