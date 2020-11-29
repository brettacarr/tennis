var should = require('chai').should();
// var expect = require('chai').expect;
require('../src/domain/tournament')();
require('../src/domain/match')();
require('../src/domain/match_set')();


describe('Tournament', () => {

    let matches = [];
    let tournament;

    before(() => {
        matches = [];
        let match1Games = [];
        let match2Games = [];
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([1,1,1,1]));
        match2Games.push(new Game([0,0,0,0]));
        match2Games.push(new Game([0,0,0,0]));
        match2Games.push(new Game([0,0,0,0]));
        match2Games.push(new Game([0,0,0,0]));
        match2Games.push(new Game([0,0,0,0]));
        match2Games.push(new Game([0,0,0,0]));
        matches.push(new Match('01', 'Player A', 'Player B', match1Games));
        matches.push(new Match('02', 'Player A', 'Player C', match2Games));

        tournament = new Tournament(matches);
    })

    it('should return number of games won and lost for a player', () => {
        let result = tournament.playerResults('Player A');
        result.won.should.equal(12);
        result.lost.should.equal(1);
    })

    it('should score sets', async () => {
        tournament.matches[0].sets[0].player1Points.should.equal(6);
        tournament.matches[0].sets[0].player2Points.should.equal(0);
    });

});