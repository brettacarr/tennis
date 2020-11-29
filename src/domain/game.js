module.exports = function() {
    this.Game = function (points) {

        this.points = points;

        this.winningPlayer;

        this.init = () => {

            let player1Points = 0;
            let player2Points = 0;

            this.points.forEach(point => {
                if (point == 0){
                    player1Points++;
                }
                else {
                    player2Points++;
                }

                if (hasPlayerWon(player1Points, player2Points)) {
                    if (player1Points > player2Points) {
                        this.winningPlayer = "PLAYER1";
                    } else {
                        this.winningPlayer = "PLAYER2";
                    }
                }

            })
        }

        let hasPlayerWon = (player1Points, player2Points) => {
            return (Math.abs(player1Points - player2Points) >= 2) &&
                (player1Points >= 4 || player2Points >= 4);
        }

        this.init();
    }
}
