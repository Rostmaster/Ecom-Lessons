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

        this.activePlayer = 1;
        this.winner = 0;
        this.winOption = 0;
        this.errorMsg = "";
        this.ConsoleFeedback = true;
        this.AINumber = 1;
        this.moveNumber = 1;
        if (this.AINumber == 1 && this.isPVC) this.AImove();
    };

    switchFirstPlayer() {
        this.AINumber = 1 ? 2 : 1;
    };


    makeMove(position) {

        if (!this.checkMoveValidity(position)) {
            this.notifyError(position);
            return false;
        }

        this.renderChanges();

        if (this.checkWinner()) {
            if (this.ConsoleFeedback) console.log("Player ", this.winner, "won by line ", this.winOption);
            return false;
        }

        this.changePlayer();
        this.moveNumber++;
        return true;

    };

    AImove() {
        if (this.moveNumber == 1){
            let options = [1,3,7,9]
            this.makeMove(options[Math.floor(Math.random()*options.length)])
        }

        if(this.moveNumber == 2){

        }

        if(this.moveNumber == 3){

        }

    }

    checkWinner() {
        if (this.winner != 0) return true;
        //Check rows
        if (this.board[0][0] == this.board[0][1] && this.board[0][1] == this.board[0][2] && this.board[0][0] != 0) {
            this.winOption = 1; this.winner = this.board[0][0]; return true
        };
        if (this.board[1][0] == this.board[1][1] && this.board[1][1] == this.board[1][2] && this.board[1][0] != 0) {
            this.winOption = 2; this.winner = this.board[1][0]; return true
        };
        if (this.board[2][0] == this.board[2][1] && this.board[2][1] == this.board[2][2] && this.board[2][0] != 0) {
            this.winOption = 3; this.winner = this.board[2][0]; return true
        };


        //Check columns
        if (this.board[0][0] == this.board[1][0] && this.board[1][0] == this.board[2][0] && this.board[0][0] != 0) {
            this.winOption = 4; this.winner = this.board[0][0]; return true
        };
        if (this.board[0][1] == this.board[1][1] && this.board[1][1] == this.board[2][1] && this.board[0][1] != 0) {
            this.winOption = 5; this.winner = this.board[0][1]; return true
        };
        if (this.board[0][2] == this.board[1][2] && this.board[1][2] == this.board[2][2] && this.board[0][2] != 0) {
            this.winOption = 6; this.winner = this.board[0][1]; return true
        };

        //Check diagonals
        if (this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] && this.board[0][0] != 0) {
            this.winOption = 7; this.winner = this.board[0][0]; return true
        };
        if (this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0] && this.board[0][2] != 0) {
            this.winOption = 8; this.winner = this.board[0][2]; return true
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

        if (this.ConsoleFeedback) console.log("value: ", this.activePlayer, "\tto position: ", position);

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
        if (this.activePlayer != this.AINumber && this.isPVC) this.AImove();
    };

    notifyError(position) {
        if (this.ConsoleFeedback) console.log('ERROR: ', this.errorMsg, " got: ", position);

    };

    renderChanges() {
        if (this.ConsoleFeedback) {
            console.log(this.board[0][0], "|", this.board[0][1], "|", this.board[0][2]);
            console.log(this.board[1][0], "|", this.board[1][1], "|", this.board[1][2]);
            console.log(this.board[2][0], "|", this.board[2][1], "|", this.board[2][2]);
            console.log("\n\n");
        }

    };

    resetGame() {
        this.winOption = 0;
        this.winner = 0;
        this.errorMsg = "";
        this.board.forEach((row) => {
            row.forEach((cell) => {
                cell = -1;
            });
        });
        renderChanges();
    };
};

module.exports = TTT;


let game = new TTT();
// game.makeMove(1);
// game.makeMove(5);
// game.makeMove(9);
// game.makeMove(3);
// game.makeMove(7);
// game.makeMove(4);
// game.makeMove(8);
// game.makeMove(2);
// game.makeMove(-1);
// game.makeMove(9);

