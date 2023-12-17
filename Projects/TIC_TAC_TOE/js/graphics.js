let renderChanges = function (game, board, activePlayer, messageElement) {

    board.forEach(cell => {
        let card = cell.children[0]
        let backCover = cell.children[0].children[1]
        let content = game.getContent(parseInt(cell.id))
        if (content !== 0) {
            card.style.transform = "rotateY(180deg)";
            card.style.msTransform = "rotateY(180deg)";
            card.style.WebkitTransform = "rotateY(180deg)";
            // backCover.innerHTML = game.getContent(parseInt(cell.id))
            content==='X'
            ? backCover.classList.add("X")
            : backCover.classList.add("O")
        }
        else {
            let rotation = getCurrentRotation(card)
            if (rotation === 180) {
                card.style.transform = "rotateY(0)";
                card.style.msTransform = "rotateY(0)";
                card.style.WebkitTransform = "rotateY(0)";
                backCover.innerHTML = ""
                backCover.classList.remove("X")
                backCover.classList.remove("O")
            }
        }

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

function getCurrentRotation(el) {
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "none";
    if (tm != "none") {
        var values = tm.split('(')[1].split(')')[0].split(',');
        /*
        a = values[0];
        b = values[1];
        angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
        */
        //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
        var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
        return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
    return 0;
}

let wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}