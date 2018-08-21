import Game from '../../src/Game';

describe('Game', () => {
  const game = new Game();

  describe('getLastState', () => {
    it('should return a state', () => {
      expect(game.getLastState()).toEqual(expect.arrayContaining());
    });
  });

  describe('tick', () => {
    const oldState = game.getLastState();
    game.tick();
    expect(game.getLastState()).toHaveLength(oldState.length + 1);
  });

  describe('addPlayer', () => {

  });

  describe('start', () => {

  });

  describe('pause', () => {

  });
});
