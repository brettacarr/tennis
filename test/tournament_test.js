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
        let match3Games = [];

        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([1,1,1,1]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
        match1Games.push(new Game([0,0,0,0]));
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

        match3Games.push(new Game([0,0,0,0]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([1,1,1,1]));
        match3Games.push(new Game([0,0,0,0]));
        match3Games.push(new Game([1,1,1,1]));
        matches.push(new Match('01', 'Player A', 'Player B', match1Games));
        matches.push(new Match('02', 'Player A', 'Player C', match2Games));
        matches.push(new Match('03', 'Player D', 'Player E', match3Games));

        tournament = new Tournament(matches);
    })

    it('should return number of games won and lost for a player A', () => {
        let result = tournament.playerResults('Player A');
        result.won.should.equal(18);
        result.lost.should.equal(2);
    })

    it('should return number of games won and lost for a player B', () => {
        let result = tournament.playerResults('Player B');
        result.won.should.equal(2);
        result.lost.should.equal(12);
    })

    it('should score sets', () => {
        tournament.matches[0].sets[0].player1Points.should.equal(6);
        tournament.matches[0].sets[0].player2Points.should.equal(1);
    });

    it('should return match results when player 1 wins', () => {
        let result = tournament.matchResults('01');
        result.winner.should.equal('Player A');
        result.loser.should.equal('Player B');
        result.winningScore.should.equal(2);
        result.losingScore.should.equal(0);
    });

    it('should return match results when player 2 wins', () => {
        let result = tournament.matchResults('03');
        result.winner.should.equal('Player E');
        result.loser.should.equal('Player D');
        result.winningScore.should.equal(2);
        result.losingScore.should.equal(0);
    });

});