//   _______          ______              ______         
// /__  __(_)____   /__  __/__  _____   /__  __/__   ___ 
//   / / / / ___/    / / / __ `/ ___/    / / / __ \/ _ \
//  / / / / /__     / / / /_/ / /__     / / / /_/ /  __/
// /_/ /_/\___/    /_/  \__,_/\___/    /_/  \____/\___/ 

class TTT {

    constructor(PvC = true) {
        this.board = [      //Then playing board
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]
        this.PvC = PvC      //Player vs Computer
        this.player1 = "X"  //Player 1 symbol
        this.player2 = "O"  //Player 2 symbol
        this.activePlayer = this.player1    //First turn player 1
        this.AIplayer = this.player1        //AI turn number
        this.gameOver = false       //If there is a win
        this.winningLine = 0        //Winning line (0 - default)
        this.winOptions = [         //Winning options
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 8],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]
        this.move = 1
    }

    start() {
        //reset the game
        if(this.activePlayer = this.AIplayer)this.AIMove()
    }

    makeMove(pos) {
        if (!this.isValidMove(pos)) {
            return false
        }

        this.setContent(pos, this.activePlayer)
        this.render()
        this.checkWin()?console.log("\nplayer ", this.activePlayer, 'win\n') : console.log("_____\n")
        this.changePlayer()
    }

    AIMove() {
        if(this.move===1) {
            let corners = [1,3,7,9]
            this.makeMove(corners[Math.floor(Math.random()*corners.length)])
        }
        if(this.move===2) {
            
        }
    }

    checkWin() {
        if (this.gameOver) return true
        for (let i = 0; i < this.winOptions.length; i++) {
            if (this.getContent(this.winOptions[i][0]) === this.getContent(this.winOptions[i][1])
                && this.getContent(this.winOptions[i][1]) === this.getContent(this.winOptions[i][2])
                && this.getContent(this.winOptions[i][0]) !== 0
            ) {
                this.winningLine = i
                this.gameOver = true
                return true
            }
        }
        return false
    }

    render() {
        console.log(this.board[0][0], this.board[0][1], this.board[0][2])
        console.log(this.board[1][0], this.board[1][1], this.board[1][2])
        console.log(this.board[2][0], this.board[2][1], this.board[2][2])

    }

    changePlayer() {
        this.move += 1
        this.activePlayer = this.activePlayer === this.player1 ? this.player2 : this.player1;
        this.activePlayer === this.AIplayer ? this.AIMove : null
    }
    //Helper methods
    getContent(pos) {
        //getting the content of the given position
        return pos % 3 === 0
            ? this.board[pos / 3 - 1][2]
            : this.board[Math.floor(pos / 3)][pos % 3 - 1];
    }

    setContent(pos, content) {
        pos % 3 === 0
            ? this.board[pos / 3 - 1][2] = content
            : this.board[Math.floor(pos / 3)][pos % 3 - 1] = content
    }


    isValidMove(pos) {
        //validating the number, position is empty, and win achieved
        return !this.gameOver
            && Number.isInteger(pos)
            && pos > 0 && pos < 10
            && this.getContent(pos) === 0;
    }

};

module.exports = TTT;

let exit = 10;
let game = new TTT();
console.clear();
game.start()
game.makeMove(5)

