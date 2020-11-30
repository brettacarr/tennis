module.exports = function() {
    this.MatchSet = function (player1Points, player2Points) {

        this.player1Points = player1Points;
        this.player2Points = player2Points;
        this.winner = '';

        this.init = () => {
            if (this.player1Points > this.player2Points) {
                this.winner = 'PLAYER1';
            }
            else {
                this.winner = 'PLAYER2';
            }
        }

        this.init();
    }
}
