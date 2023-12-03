
let board = document.querySelectorAll(".cell")
const messageElement = document.querySelector("#message")
const resetButton = document.querySelector(".reset")
let changeFirstPlayerButton = document.querySelector(".first-player")
const game = new TTT()
let gameStarted = false

//? Graphic control
let render = () => {
    game.render()
    renderChanges(game, board, game.activePlayer, messageElement)
}

let previewMove = (pos) => {

}

let raiseError = (error) => {
    showError(error, messageElement)
}
// render()

//? Game control

let checkWin = () => {
    return game.isGameOver()
}

let gameOver = () => {
    messageElement.textContent = "Game Over"
}

let start = () => {
    game.start()
    render()
}

let reset = () => {
    game.reset()
    render()
}

let move = (pos = null) => {

    let moveResult

    game.activePlayer === game.AIplayer
        ? moveResult = game.AIMove()
        : moveResult = game.makeMove(pos)

    if (moveResult === game.errors.VALID_MOVE) {
        checkWin()
            ? ''
            : game.changePlayer()

        render()
    }
    else {
        raiseError(moveResult)
    }

    game.activePlayer === game.AIplayer && !game.gameOver
        ? move()
        : ''
}

let changeFirstPlayer = (event) => {

    game.startingPlayer === 'AI'
        ? game.changeFirstPlayer("Player")
        : game.changeFirstPlayer("AI")
    changeFirstPlayerButton = game.startingPlayer
}
//? Button Clicks

let cellClick = (event) => {

    if (event.currentTarget.classList.contains("cell")) {
        move(parseInt(event.currentTarget.id)) //! UNCOMMENT !!!!!!!

    }
}

board.forEach((item) => {
    item.onclick = function (event) {
        if (event.currentTarget.classList.contains("cell")) {
            cellClick(event)
        }
    };
});

resetButton.addEventListener("click", reset)
changeFirstPlayerButton.addEventListener("click", changeFirstPlayer)
start()
//animation


