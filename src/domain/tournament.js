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
                if (match.player1Name == playerName) {
                    gamesWonByPlayer += match.gamesWonByPlayer1;
                    gamesLostByPlayer += match.gamesWonByPlayer2;
                } else if (match.player2Name == playerName) {
                    gamesWonByPlayer =+ match.gamesWonByPlayer2;
                    gamesLostByPlayer =+ match.gamesWonByPlayer1;
                }
            })
            return {won: gamesWonByPlayer, lost: gamesLostByPlayer};
        }

        this.matchResults = (matchId) => {
            let foundMatch;
            for (let match of this.matches) {
                if (match.matchId == matchId) {
                    foundMatch = match;
                    break;
                }
            }



            return {winner: foundMatch.winner,
            loser : foundMatch.loser,
            winningScore: foundMatch.winningScore,
            losingScore: foundMatch.losingScore};
        }
    }
}
