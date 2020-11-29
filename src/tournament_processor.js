var fs = require('fs');
const fsPromises = require('fs').promises;

require('./domain/tournament')();
require('./domain/match')();

var processTournamentData = async (fileName) => {

    let readFileData = async () => {
        let fileData;
        await fsPromises.readFile(fileName).then((rawData) => {
            fileData = rawData

        }).catch((error) => {
            console.log(error);
        })
        return fileData.toString();
    }

    let splitToArray = (data) => {
        return data.split('\n');
    }

    let cleanData = (rawData) => {
        return rawData
            .map((value) => {return value.trim()})
            .filter((value) => {return value.length > 0;});
    }

    let processMatchGames = (matchData) => {
        let games = [];
        let gamePoints = [];
        let player1Points = 0;
        let player2Points = 0;

        matchData.points.forEach(point => {
            if (point == 0) {
                player1Points++;
            }
            else {
                player2Points++;
            }
            gamePoints.push(point);
            if (hasGameEnded(player1Points, player2Points)) {
                games.push(new Game(gamePoints));

                player1Points = 0;
                player2Points = 0;
                gamePoints = [];
            }

        });
        return games;
    }

    let processMatches = (dataLines) => {

        let matchData = [];
        let matchDataLine = [];

        dataLines.forEach((line) => {
            if (line.match(/Match:/i)) {
                matchDataLine = {};
                matchDataLine.matchId = line.replace("Match:", "").trim();
                matchDataLine.points = [];
                matchData.push(matchDataLine);

            } else if (line.match(/ vs /i)) {
                matchDataLine.playerName1 = line.split(" vs ")[0];
                matchDataLine.playerName2 = line.split(" vs ")[1];
            } else {
                matchDataLine.points.push(line);
            }
        });

        let matches = [];

        matchData.forEach(item => {
            let games = processMatchGames(item);
            matches.push(new Match(item.matchId,item.playerName1,item.playerName2, games));

        })
        return matches;
    }

    let hasGameEnded = (player1Points, player2Points) => {
        return (Math.abs(player1Points - player2Points) >= 2) &&
            (player1Points >= 4 || player2Points >= 4);
    }

    let dataLines;

    await readFileData().then((data) => {
        dataLines = cleanData(splitToArray(data));
    });

    let matches = processMatches(dataLines);

    return new Tournament(matches);
}

module.exports = {processTournamentData}