
let board = document.querySelectorAll(".cell")
const messageElement = document.querySelector("#message")
const resetButton = document.querySelector(".reset")
const game = new TTT();



//? Graphic control
let render = () => {
    game.render()
    renderChanges(game, board, game.activePlayer, messageElement)
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

    if (moveResult) {
        render()
        
        checkWin()
        ? gameOver()
        : game.changePlayer()
        
    }
    else {
        raiseError(moveResult)
    }

    game.activePlayer === game.AIplayer
        ? move()
        : ''
}


//? Button Clicks

let cellClick = (event) => {

    if (event.currentTarget.classList.contains("cell")) {
        move(parseInt(event.currentTarget.id))
    }
    else {
        reset()
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

start()
//animation


