let renderChanges = function(game, board, activePlayer, messageElement) {
    board.forEach(cell => {
            cell.style.fontsize = "60px"
            cell.innerHTML = game.getContent(parseInt(cell.id)) === 0
            ? "" 
            : game.getContent(parseInt(cell.id))
    });
    game.gameOver
    ? game.winningLine === -1
        ? "It is a Tie"
        : activePlayer + " Won"
    : messageElement.innerHTML = activePlayer + "'s move"
    

}

let showError = (error, errorElement) => {
    errorElement.innerHTML = error
}

