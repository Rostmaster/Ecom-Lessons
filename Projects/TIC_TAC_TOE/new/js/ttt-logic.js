//   _______          ______              ______         
// /__  __(_)____   /__  __/__  _____   /__  __/__   ___ 
//   / / / / ___/    / / / __ `/ ___/    / / / __ \/ _ \
//  / / / / /__     / / / /_/ / /__     / / / /_/ /  __/
// /_/ /_/\___/    /_/  \__,_/\___/    /_/  \____/\___/ 

class TTT {

    constructor(isPVC = true) {
        this.isPVC = isPVC;
        this.board = [
            [0, 0, 0], // 1 2 3
            [0, 0, 0], // 4 5 6
            [0, 0, 0]];// 7 8 9

        this.activePlayer = 1;      //Current active player
        this.winner = 0;            //Winner player (first or second)
        this.winOption = 0;         //Winning combination
        this.errorMsg = "";         //Last error message
        this.ConsoleFeedback = true;//Turn on console feedback
        this.AINumber = 1;          //AI player number (first or second)
        this.moveNumber = 1;        //Move number


        this.player1Moves = [];
        this.player2Moves = [];

        this.AITargets = [0, 0, 0, 0, 0, 0, 0, 0];

        this.winningCombinations = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];

        this.posAddresses = {
            1: { row: 0, column: 0 },
            2: { row: 0, column: 1 },
            3: { row: 0, column: 2 },
            4: { row: 1, column: 0 },
            5: { row: 1, column: 1 },
            6: { row: 1, column: 2 },
            7: { row: 2, column: 0 },
            8: { row: 2, column: 1 },
            9: { row: 2, column: 2 },
        };
        if (this.AINumber === 1 && this.isPVC && this.moveNumber === 1) this.AIMakeMove();
    };

    switchFirstPlayer() {
        this.AINumber = 1 ? 2 : 1;
    };


    makeMove(position) {

        if (!this.checkMoveValidity(position)) {
            this.notifyError(position);
            return false;
        }


        this.activePlayer === 1
            ? this.player1Moves.push(position)
            : this.player2Moves.push(position);

        this.renderChanges();

        if (this.checkWinner()) {
            if (this.ConsoleFeedback) console.log("Player ", this.winner, "won by line ", this.winOption,);
            return false;
        }
        this.moveNumber += 1;

        this.changePlayer();

    };

    isPositionEmpty(position) {
        return this.board[this.posAddresses[position].row][this.posAddresses[position].column] === 0;
    };

    positionValue(position) {
        return this.board[this.posAddresses[position].row][this.posAddresses[position].column]
    };

    assignTargetsPlayer1() {

        this.winningCombinations.forEach((combination, i) => {
            if (this.AITargets[i] >= 0) {
                let probability = 0;
                if (this.player2Moves.includes(combination[0])) probability -= 10;
                if (this.player2Moves.includes(combination[1])) probability -= 10;
                if (this.player2Moves.includes(combination[2])) probability -= 10;

                if (this.player1Moves.includes(combination[0])) probability += 1;
                if (this.player1Moves.includes(combination[1])) probability += 1;
                if (this.player1Moves.includes(combination[2])) probability += 1;

                this.AITargets[i] = probability;
            }

        });

        //console.log("Targets:", this.AITargets);
    };

    assignTargetsPlayer2() {

        this.winningCombinations.forEach((combination, i) => {
            if (this.AITargets[i] >= 0) {
                let probability = 0;
                if (this.player1Moves.includes(combination[0])) probability -= 10;
                if (this.player1Moves.includes(combination[1])) probability -= 10;
                if (this.player1Moves.includes(combination[2])) probability -= 10;

                if (this.player2Moves.includes(combination[0])) probability += 1;
                if (this.player2Moves.includes(combination[1])) probability += 1;
                if (this.player2Moves.includes(combination[2])) probability += 1;

                //   this.AITargets[i] = probability;
            }

        });

        console.log("Targets:", this.AITargets);
    };

    assignTargets() {
        this.AINumber === 1
            ? this.assignTargetsPlayer1()
            : this.assignTargetsPlayer2();
    };


    AIMakeMove() {
        if (this.winner != 0 || this.AINumber !== this.activePlayer) return;

        this.assignTargets();
        if (this.moveNumber == 1) {
            console.log("this.moveNumber == 1",this.moveNumber == 1);
            let options = [1, 3, 7, 9]
            this.makeMove(options[Math.floor(Math.random() * options.length)]);
        }

        if (this.moveNumber == 2) {
            console.log("this.moveNumber == 2",this.moveNumber == 2);
            if ((this.player1Moves.includes(1)
                || this.player1Moves.includes(3)
                || this.player1Moves.includes(7)
                || this.player1Moves.includes(9))) {
                this.makeMove(5);
            }

            else if (this.player1Moves.includes(5)) {
                let options = [1, 3, 7, 9]
                this.makeMove(options[Math.floor(Math.random() * options.length)]);
            }
        }

        if (this.moveNumber >= 3) {
            console.log("this.moveNumber >= 3",this.moveNumber >= 3);
            if (!this.player1Moves.includes(1) && !this.player2Moves.includes(1)) {
                this.makeMove(1);
            }
            if (!this.player1Moves.includes(2) && !this.player2Moves.includes(2)) {
                this.makeMove(2);
            }
            if (!this.player1Moves.includes(3) && !this.player2Moves.includes(3)) {
                this.makeMove(3);
            }
            if (!this.player1Moves.includes(4) && !this.player2Moves.includes(4)) {
                this.makeMove(4);
            }
            if (!this.player1Moves.includes(5) && !this.player2Moves.includes(5)) {
                this.makeMove(5);
            }
            if (!this.player1Moves.includes(6) && !this.player2Moves.includes(6)) {
                this.makeMove(6);
            }
            if (!this.player1Moves.includes(7) && !this.player2Moves.includes(7)) {
                this.makeMove(7);
            }
            if (!this.player1Moves.includes(8) && !this.player2Moves.includes(8)) {
                this.makeMove(8);
            }
            if (!this.player1Moves.includes(9) && !this.player2Moves.includes(9)) {
                this.makeMove(9);
            }
        }

    }

    checkWinner() {
        if (this.winner !== 0) return true;
        //Check rows

        if (this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2] && this.board[0][0] !== 0) {
            this.winOption = 1; this.winner = this.board[0][0]; return true;
        };
        if (this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2] && this.board[1][0] !== 0) {
            this.winOption = 2; this.winner = this.board[1][0]; return true;
        };
        if (this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2] && this.board[2][0] !== 0) {
            this.winOption = 3; this.winner = this.board[2][0]; return true;
        };

        //Check columns
        if (this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0] && this.board[0][0] !== 0) {
            this.winOption = 4; this.winner = this.board[0][0]; return true;
        };
        if (this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1] && this.board[0][1] !== 0) {
            this.winOption = 5; this.winner = this.board[0][1]; return true;
        };
        if (this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2] && this.board[0][2] !== 0) {
            this.winOption = 6; this.winner = this.board[0][1]; return true;
        };

        //Check diagonals
        if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0] !== 0) {
            this.winOption = 7; this.winner = this.board[0][0]; return true;
        };
        if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2] !== 0) {
            this.winOption = 8; this.winner = this.board[0][2]; return true;
        };

        return false;
    };

    checkMoveValidity(position) {
        if (this.winner != 0) {
            this.errorMsg = "The game was ended, player " + this.winner + " won";
            return false;
        }

        if (!Number.isInteger(position)) {
            this.errorMsg = "Wrong position type, expected integer";
            return false;
        }

        if (position > 9 || position < 1) {
            this.errorMsg = "Position out of range, expected from 1 to 9";
            return false;
        } //in range

        if (this.ConsoleFeedback) console.log("move:", this.moveNumber, "value:", this.activePlayer, "to position:", position);

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if ((i) * 3 + j + 1 == position) {
                    if (this.board[i][j] > 0) {
                        this.errorMsg = "Position " + position + " already have a value";
                        return false;
                    }

                    this.board[i][j] = this.activePlayer;
                    return true;
                }
            }
        }


        return false;   // in case nothing above didn't work (must not be)

    };

    changePlayer() {
        this.activePlayer = this.activePlayer == 1 ? 2 : 1;
        if (this.activePlayer === this.AINumber && this.isPVC) {
            console.log("changePlayer to AI:");
            this.AIMakeMove();
        }
        else {
            console.log("changePlayer to player:");
        }

    };

    notifyError(position) {
        if (this.ConsoleFeedback) console.log('ERROR:', position, "\'", this.errorMsg, "\'");

    };

    renderChanges() {
        if (this.ConsoleFeedback) {
            console.log(this.board[0][0], "|", this.board[0][1], "|", this.board[0][2]);
            console.log(this.board[1][0], "|", this.board[1][1], "|", this.board[1][2]);
            console.log(this.board[2][0], "|", this.board[2][1], "|", this.board[2][2]);
            console.log("\n\n");
        }
        return this.board;
    };

    resetGame() {
        this.winOption = 0;
        this.winner = 0;
        this.errorMsg = "";
        this.AITargets = [0, 0, 0, 0, 0, 0, 0, 0];
        this.board.forEach((row) => {
            row.forEach((cell) => {
                cell = 0;
            });
        });
        renderChanges();
    };
};

module.exports = TTT;
const readline = require('readline');


let exit = 10;
let game = new TTT();

game.makeMove(5);   //move 2
game.makeMove(8);   //move 4
game.makeMove(9);   //move 6

// console.log("Let's play");
// while(exit!== 0)
// {
//     exit = readline.createInterface(
//         process.stdin, process.stdout);
//     game.makeMove(exit);
// }
// console.log("Game over!");


