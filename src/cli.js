const inquirer = require('inquirer');
const tournamentProcessor = require('./tournament_processor');
require('./domain/tournament');

var main = async (fileName) => {

    let commands = ['View all match results', 'Query a player', 'Query a match'];

    let questions = [
        {
            type: 'list',
            name: 'command',
            message: 'What would you like to do?',
            choices: commands,
        }
    ];

    let isAllResultsCommand = (answers, commands) => {
        return answers.command === commands[0];
    }

    let isQueryPlayerCommand = (answers, commands) => {
        return answers.command === commands[1];
    }

    let isQueryMatchCommand = (answers, commands) => {
        return answers.command === commands[2];
    }

    let performAllResultsCommand = (tournament, resolve) => {
        console.log('All match results:\n' +
            'Number of Matches: ' + tournament.numberOfMatches());
        resolve();
    }

    let performQueryPlayerCommand = (resolve) => {
        inquirer.prompt([{
            type: 'input',
            name: 'player',
            message: 'Which player? (E.g Person A, Person B)'
        }]).then((answers) => {
            console.log(`Chosen player: ${answers.player}`);
            let playerResults = tournament.playerResults(answers.player);
            console.log(playerResults);
            resolve();
        })
    }

    let performQueryMatch = (resolve) => {
        inquirer.prompt([{
            type: 'input',
            name: 'match',
            message: 'Which match? (E.g 01, 02)'
        }]).then((answers) => {
            let results = tournament.matchResults(answers.match);
            console.log(`Chosen match: ${answers.match}\n` +
                `${results.winner} defeated ${results.loser}\n` +
                `${results.winningScore} sets to ${results.losingScore}`
            );
            resolve();
        })
    }
    let tournament = await tournamentProcessor.processTournamentData(fileName);

    return new Promise((resolve, reject) => {


        inquirer.prompt(questions).then((answers) => {

            if (isAllResultsCommand(answers, commands)) {
                performAllResultsCommand(tournament, resolve);
            } else if (isQueryPlayerCommand(answers, commands)) {
                performQueryPlayerCommand(resolve);
            } else if (isQueryMatchCommand(answers, commands)) {
                performQueryMatch(resolve);
            }
        });
    });

}

module.exports = {main}