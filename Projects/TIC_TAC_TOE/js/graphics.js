let renderChanges = function (game, board, activePlayer, messageElement) {
    board.forEach(cell => {
        cell.style.fontsize = "60px"
        cell.innerHTML = game.getContent(parseInt(cell.id)) === 0
            ? ""
            : game.getContent(parseInt(cell.id))
    });
    if (game.gameOver) {
        game.winningLine === -1
            ? messageElement.innerHTML = "It is a Tie"
            : messageElement.innerHTML = activePlayer + " Won"
    }
    else messageElement.innerHTML = activePlayer + "'s move"




}

let resetGameBoard = (game, board, messageElement) => {

}

let drawWinningLine = (game, board) => {

}

let showError = (error, errorElement) => {
    errorElement.innerHTML = error
}

