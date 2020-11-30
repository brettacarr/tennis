const inquirer = require('inquirer')
const sinon  = require('sinon');
// var should = require('chai').should();
var expect = require('chai').expect;
var cli = require('../src/cli');
var tournamentProcessor = require('../src/tournament_processor');
require('../src/domain/tournament')();


describe('CLI', () => {

    let inquirerOriginal;
    let spy;

    beforeEach(() => {
        inquirerOriginal = inquirer.prompt;
        spy = sinon.spy(console, 'log');
    })

    afterEach(() => {
        spy.restore();
        inquirer.prompt = inquirerOriginal;
    })

    it('should out put all results when all option selected', async () => {
        inquirer.prompt = ([]) => Promise.resolve({command: 'View all match results'})
        // TODO stub call to tournamentProcessor

        await cli.main('./test/resources/full_tournament.txt');

        expect(spy.calledWith('All match results:\nNumber of Matches: 2')).to.equal(true);

    })

    it('should prompt for player', async () => {
        inquirer.prompt = ([]) => Promise.resolve({command: 'Query a player', player: 'Person A'})

        await cli.main('./test/resources/full_tournament.txt');

        expect(spy.calledWith('Chosen player: Person A')).to.equal(true);

    })

    it('should prompt for match', async () => {
        inquirer.prompt = ([]) => Promise.resolve({command: 'Query a match', match: '01'})
        await cli.main('./test/resources/full_tournament.txt');

        expect(spy.calledWith(  'Chosen match: 01\n' +
                                'Person A defeated Person B\n' +
                                '2 sets to 0')).to.equal(true);

    })

});