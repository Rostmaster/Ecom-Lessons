let root = document.documentElement;
let themeLight = true;


let lightMode = [
    'rgb(0, 0, 0)',
    'rgb(255, 255, 0)',
    "url('https://images.unsplash.com/photo-1517817619047-36c7fc165462?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1521811628991-7a3ea581f7d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tncm91bmQlMjBwYXBlcnxlbnwwfDB8MHx8fDA%3D')",
    "url('https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1437419764061-2473afe69fc2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
]
let darkMode = [
    'rgb(255, 255, 255)',
    'rgb(255, 0, 0)',
    "url('https://images.unsplash.com/photo-1559999831-7deaf136d4a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1508918326776-457496a41ed5?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1615127717889-8945dba1f05a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1518648751968-16f6987377af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
]


let themeChange = () => {
    if (themeLight) {
        root.style.setProperty('--primary-color', lightMode[0]);
        root.style.setProperty('--secondary-color', lightMode[1]);
        root.style.setProperty('--title-block-bg', lightMode[2]);
        root.style.setProperty('--history-block-bg', lightMode[3]);
        root.style.setProperty('--rules-block-bg', lightMode[4]);
        root.style.setProperty('--game-block-bg', lightMode[5]);
    }
    else {
        root.style.setProperty('--primary-color', darkMode[0]);
        root.style.setProperty('--secondary-color', darkMode[1]);
        root.style.setProperty('--title-block-bg', darkMode[2]);
        root.style.setProperty('--history-block-bg', darkMode[3]);
        root.style.setProperty('--rules-block-bg', darkMode[4]);
        root.style.setProperty('--game-block-bg', darkMode[5]);
    }
}

let toggleTheme = () => {
    themeLight = !themeLight
    themeChange()
}

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
            content === 'X'
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