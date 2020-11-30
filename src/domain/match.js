require('./game')();
require('./match_set')();

module.exports = function() {
    this.Match = function (matchId, player1Name, player2Name, games) {
        this.matchId = matchId;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.games = games;
        this.sets = [];

        this.gamesWonByPlayer1 = 0;
        this.gamesWonByPlayer2 = 0;
        this.setsWonByPlayer1 = 0;
        this.setsWonByPlayer2 = 0;

        this.winner = '';
        this.loser = '';
        this.winningScore = 0;
        this.losingScore = 0;

        this.init = () => {

            this.initSets();
            this.calculateMatchResults();
        }

        this.initSets = () => {

            let player1SetPoints = 0;
            let player2SetPoints = 0;

            games.forEach(game => {
                if (game.winningPlayer === 'PLAYER1') {
                    player1SetPoints++;
                    this.gamesWonByPlayer1++;
                }
                else {
                    player2SetPoints++;
                    this.gamesWonByPlayer2++;
                }

                if (this.hasPlayerWonSet(player1SetPoints, player2SetPoints)) {

                    let set = new MatchSet(player1SetPoints, player2SetPoints)
                    this.sets.push(set);
                    if (set.winner == 'PLAYER1') {
                        this.setsWonByPlayer1++;
                    }
                    else {
                        this.setsWonByPlayer2++;
                    }
                    player1SetPoints = 0;
                    player2SetPoints = 0;
                }

            })
        }

        this.hasPlayerWonSet = (player1SetPoints, player2SetPoints) => {
            return player1SetPoints == 6 ||
                player2SetPoints == 6;
        }

        this.calculateMatchResults = () => {
            if (this.setsWonByPlayer1 > this.setsWonByPlayer2) {
                this.winningScore = this.setsWonByPlayer1;
                this.losingScore = this.setsWonByPlayer2;
                this.winner = this.player1Name;
                this.loser = this.player2Name;
            }
            else {
                this.winningScore = this.setsWonByPlayer2;
                this.losingScore = this.setsWonByPlayer1;
                this.winner = this.player2Name;
                this.loser = this.player1Name;
            }
        }


        this.init();
    }
}
