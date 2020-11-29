module.exports = function() {
    this.Tournament = function (matches) {

        this.matches = matches;

        this.numberOfMatches = () => {
            return matches.length;
        }

        this.playerResults = (playerName) => {
            let gamesWonByPlayer = 0;
            let gamesLostByPlayer = 0;
            matches.forEach(match => {
                if (match.player1Name === playerName) {
                    gamesWonByPlayer += match.gamesWonByPlayer1.length;
                    gamesLostByPlayer += match.gamesWonByPlayer2.length;
                } else if (match.player2Name === playerName) {
                    gamesWonByPlayer =+ match.gamesWonByPlayer2.length;
                    gamesLostByPlayer =+ match.gamesWonByPlayer1.length;
                }
            })
            return {won: gamesWonByPlayer, lost: gamesLostByPlayer};
        }
    }
}
