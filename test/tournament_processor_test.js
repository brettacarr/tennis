var should = require('chai').should();
// var expect = require('chai').expect;
var tournamentProcessor = require('../src/tournament_processor');


describe('Tournament processor', () => {

    it('should set the match id', async () => {
        let tournament = await tournamentProcessor.processTournamentData('./test/resources/full_tournament.txt');
        tournament.matches[0].matchId.should.equal('01');
        tournament.matches[1].matchId.should.equal('02');
    })

    it('should set the matches', async () => {
        let tournament = await tournamentProcessor.processTournamentData('./test/resources/full_tournament.txt');
        tournament.numberOfMatches().should.equal(2);
    })

    it('should set the players for a match', async () => {
        let tournament = await tournamentProcessor.processTournamentData('./test/resources/full_tournament.txt');
        tournament.matches[0].player1Name.should.equal('Person A');
        tournament.matches[0].player2Name.should.equal('Person B');
    });

    it('should set the players for a match', async () => {
        let tournament = await tournamentProcessor.processTournamentData('./test/resources/full_tournament.txt');
        tournament.matches[0].player1Name.should.equal('Person A');
        tournament.matches[0].player2Name.should.equal('Person B');
    });

    // it('should set match points', async () => {
    //     let tournament = await tournamentProcessor.processTournamentData('./test/resources/full_tournament.txt');
    //     tournament.matches[0].rawPoints.length.should.equal(48);
    //     tournament.matches[1].rawPoints.length.should.equal(112);
    // });

    it('should set games', async () => {
        let tournament = await tournamentProcessor.processTournamentData('./test/resources/full_tournament.txt');
        tournament.matches[0].games.length.should.equal(12);
        tournament.matches[1].games.length.should.equal(28);
    });

});