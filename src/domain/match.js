require('./game')();
require('./match_set')();

module.exports = function() {
    this.Match = function (matchId, player1Name, player2Name, games) {
        this.matchId = matchId;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.games = games;
        this.sets = [];

        this.gamesWonByPlayer1 = [];
        this.gamesWonByPlayer2 = [];

        this.init = () => {

            let player1Points = 0;
            let player2Points = 0;

            games.forEach(game => {
                if (game.winningPlayer === 'PLAYER1'){

                    this.gamesWonByPlayer1.push(game);
                    player1Points++;
                }
                else {
                    player2Points++;
                    this.gamesWonByPlayer2.push(game);
                }
                if (player1Points == 6 ||
                player2Points == 6) {
                    this.sets.push(new MatchSet(player1Points, player2Points));
                }

            })
        }


        this.init();
    }
}
