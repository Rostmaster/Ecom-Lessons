const TTT = require('./js/ttt-logic.js');

let board = document.getElementsByClassName('cell')
const game = new TTT(false);

game.start()
game.render()
while(!game.gameOver) {
    game.makeMove(Math.floor(Math.random() * 10));
    game.checkWin()
    game.render();

}


//on click assignment
for (var i = 0; i < board.length; i++)
     board[i].onclick = function() { cellClick(this);};

cellClick = (event) =>{
    
}

//render changes


//animation

