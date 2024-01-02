
let board = document.querySelectorAll(".cell")
let themeChangeElement = document.querySelector(".cb")
const messageElement = document.querySelector("#message")
const resetButton = document.querySelector(".reset")
let changeFirstPlayerButton = document.querySelector(".first-player")
let changePvPButton = document.querySelector(".PvP")
const game = new TTT()
let gameStarted = false

//? Graphic control
let render = () => {
    game.render()
    renderChanges(game, board, game.activePlayer, messageElement)

    changeFirstPlayerButton.innerHTML = game.startingPlayer + ' first'
    changePvPButton.innerHTML = game.startingPvC ? "PvC" : "PvP"

    if (!game.startingPvC) {
        changeFirstPlayerButton.style.display = "none"
        game.startingPlayer === 'AI' && game.move === 1 ? move() : ''
    }
    else {
        changeFirstPlayerButton.style.display = "flex"
    }
}

let raiseError = (error) => {
    showError(error, messageElement)
}
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

    if (game.activePlayer === game.AIplayer && game.PvC) {
        moveResult = game.AIMove()
    } else {
        moveResult = game.makeMove(pos)
    }

    if (moveResult === game.errors.VALID_MOVE) {
        checkWin()
            ? ''
            : game.changePlayer()
        render()
    }
    else {
        raiseError(moveResult)
    }

    game.activePlayer === game.AIplayer && !game.gameOver && game.PvC
        ? setTimeout(function () { move() }, 500 + Math.random(700))
        : ''
}

let changeFirstPlayer = (event) => {
    game.startingPlayer === 'AI'
        ? game.changeFirstPlayer("Me")
        : game.changeFirstPlayer('AI')
    render()
}

let changePvP = (event) => {
    game.startingPvC ? game.changeStartingPvC(false) : game.changeStartingPvC(true)
    render()
}

let cellClick = (event) => {
    if (event.currentTarget.classList.contains("cell")) {
        move(parseInt(event.currentTarget.id))
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
changePvPButton.addEventListener("click", changePvP)
themeChangeElement.addEventListener("click", toggleTheme)
start()
//animation



