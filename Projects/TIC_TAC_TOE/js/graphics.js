let renderChanges = function(game, board, activePlayer, messageElement) {
    console.log(board)
    board.forEach(cell => {
        cell.innerHTML = game.getContent(parseInt(cell.id))
    });
    messageElement.innerHTML = activePlayer + "'s move"

}

let showError = (error, errorElement) => {
    errorElement.innerHTML = error
}

