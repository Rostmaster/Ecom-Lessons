
let board = document.querySelectorAll(".cell")
const messageElement = document.querySelector("#message")
const restartElement = document.getElementsByClassName(".reset")

const game = new TTT();
restartElement.onClick = game.reset 

game.start()
//render changes

let raiseError = (error) => {
    showError(error, messageElement)
}

let render = () => {
    renderChanges(game, board, game.activePlayer, messageElement)
}

// run the game loop placeholder
let gameRun = () => {
    while (!game.gameOver) {
        let moveResult = game.makeMove(Math.floor(Math.random() * (9 - 1 + 1) + 1))
    }
}










gameRun()


//animation


