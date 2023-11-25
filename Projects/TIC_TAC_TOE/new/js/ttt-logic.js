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
        this.AIplayer = this.player1       //AI turn number
        this.EnemyPlayer
        this.gameOver = false       //If there is a win
        this.winningLine = 0        //Winning line (0 - default)
        this.freeCells = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.winOptions = [         //Winning options
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]
        this.move = 1
        this.debug = true
        this.winMove = false
    }

    changeFirstPlayer() {
        this.AIplayer = this.AIplayer === this.player1 ? this.player2 : this.player1
    }

    reset() {
        this.board = [      //Then playing board
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]
        this.activePlayer = this.player1    //First turn player 1      //AI turn number
        this.gameOver = false       //If there is a win
        this.winningLine = 0        //Winning line (0 - default)
        this.freeCells = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.move = 1
    }

    start() {
        console.clear()
        //reset the game
        this.AIplayer === this.player1
            ? this.EnemyPlayer = this.player2
            : this.EnemyPlayer = this.player1

        if (this.activePlayer === this.AIplayer) this.AIMove()


    }
    //! For external use
    makeMove(pos) {
        this.debug ? console.log("move", this.move, " start") : ''
        this.debug ? console.log("player \'", this.activePlayer, "\' go to ", pos) : ''
        if (!this.isValidMove(pos)) {
            this.debug ? console.log("NO MOVE WAS DONE") : ''

            return false
        }

        this.setContent(pos, this.activePlayer)
        this.render()
        this.checkWin()
            ? console.log("\nplayer ", this.activePlayer, 'win with line', this.winningLine, '\n')
            : this.debug ? console.log("turn ", this.move, this.freeCells, "\n") : ''
        this.debug ? console.log("move", this.move, " end") : ''
        this.changePlayer()
        this.debug ? console.log("__________") : ''
        return true;
    }

    AIMove() {

        let enemy = this.activePlayer === this.player1 ? this.player2 : this.player1
        let corners = [1, 3, 7, 9]
        let possibleCorners = corners.filter(value => this.freeCells.includes(value))

        if (this.freeCells.length == 1) {
            this.makeMove(this.freeCells[0])
        }

        if (this.move <= 2) {
            this.makeMove(possibleCorners[Math.floor(Math.random() * possibleCorners.length)])
            return true
        }
        if (this.move === 3) {
            if (this.getContent(2) === enemy) {
                this.makeMove(8)
                return true
            }
            if (this.getContent(4) === enemy) {
                this.makeMove(6)
                return true
            }
            if (this.getContent(6) === enemy) {
                this.makeMove(4)
                return true
            }
            if (this.getContent(8) === enemy) {
                this.makeMove(2)
                return true
            }

            this.makeMove(possibleCorners[Math.floor(Math.random() * possibleCorners.length)])

            return true
        }
        if (this.move === 4) {
            let nextMove = this.AIanalysis()
            this.winMove
                ? this.makeMove(nextMove)
                : this.makeMove(possibleCorners[Math.floor(Math.random() * possibleCorners.length)])
            return true
        }
        if (this.move > 4) {
            this.makeMove(this.AIanalysis())
            return true
        }
        return false
    }

    AIanalysis() {
        let possibilities = []
        let loosePreventMove = 0
        let possibleMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0,0]
        let possibility = 0
        for (let i = 0; i < this.winOptions.length; i++) {
            let opt = this.winOptions[i]
            this.getContent(opt[0]) === this.EnemyPlayer ? possibility -= 1 : this.getContent(opt[0]) === this.AIplayer ? possibility += 1 : ''
            this.getContent(opt[1]) === this.EnemyPlayer ? possibility -= 1 : this.getContent(opt[1]) === this.AIplayer ? possibility += 1 : ''
            this.getContent(opt[2]) === this.EnemyPlayer ? possibility -= 1 : this.getContent(opt[2]) === this.AIplayer ? possibility += 1 : ''
            if (this.getContent(opt[0]) === 0 || this.getContent(opt[1]) === 0 || this.getContent(opt[2]) === 0) {
                possibilities.push(possibility)
            }
            else {
                possibilities.push(-10)
            }
            console.log(possibilities)
            if (possibility === 2) {
                this.winMove = true
                return this.getContent(opt[0]) === 0 ? opt[0] : this.getContent(opt[1]) === 0 ? opt[1] : opt[2]
            } else if (possibility === 1) {
                this.getContent(opt[0]) === 0 ? possibleMoves[opt[0]] += 1 : ''
                this.getContent(opt[1]) === 0 ? possibleMoves[opt[1]] += 1 : ''
                this.getContent(opt[2]) === 0 ? possibleMoves[opt[2]] += 1 : ''
            }
            if (possibility === -2) {
                loosePreventMove = this.getContent(opt[0]) === 0 ? opt[0] : this.getContent(opt[1]) === 0 ? opt[1] : opt[2]
            }
            possibility = 0

        }

        if (possibleMoves.length !== 0 && loosePreventMove === 0) { // If there are possible moves to put a second symbol in line
            return this.makeMove(possibleMoves.indexOf(Math.max(...possibleMoves)))

        }

        return loosePreventMove === 0 // if there no possible enemy win in the next turn  make a random move
            ? this.makeMove(this.freeCells[Math.floor(Math.random() * this.freeCells.length)])
            : loosePreventMove
    }

    //! For external use
    checkWin() {
        if (this.gameOver) return true
        for (let i = 0; i < this.winOptions.length; i++) {
            if (this.getContent(this.winOptions[i][0]) === this.getContent(this.winOptions[i][1])
                && this.getContent(this.winOptions[i][1]) === this.getContent(this.winOptions[i][2])
                && this.getContent(this.winOptions[i][0]) !== 0
            ) {
                this.winningLine = i + 1
                this.gameOver = true
                return true
            }
        }
        if (this.freeCells.length === 0) {
            this.winningLine = -1
            this.gameOver = true
        }
        return false
    }

    render() {
        console.log(this.board[0][0], this.board[0][1], this.board[0][2])
        console.log(this.board[1][0], this.board[1][1], this.board[1][2])
        console.log(this.board[2][0], this.board[2][1], this.board[2][2], "\n")
    }

    changePlayer() {

        this.move += 1
        this.activePlayer = this.activePlayer === this.player1 ? this.player2 : this.player1;
        this.activePlayer === this.AIplayer && this.PvC ? this.AIMove() : ''
    }
    //Helper methods
    getContent(pos) {
        //getting the content of the given position
        return pos % 3 === 0
            ? this.board[pos / 3 - 1][2]
            : this.board[Math.floor(pos / 3)][pos % 3 - 1];
    }

    setContent(pos, content) {
        for (let i = 0; i < this.freeCells.length; i++) {
            if (this.freeCells[i] === pos) {
                this.freeCells.splice(i, 1)
            }

        }
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

// let game = new TTT();

// game.start()
// game.render()
// while (!game.gameOver) {
//     game.makeMove(Math.floor(Math.random() * 10));
//     game.checkWin()
//     // game.render();

// }