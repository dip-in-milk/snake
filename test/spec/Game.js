import Game from '../../src/Game';
import Player from '../../src/Player';
import mockSprite from '../mock/player/sprite';

import Sprite from '../mock/Sprite';

jest.mock('../../src/Player', () => jest.fn().mockImplementation(() => ({
  tick: jest.fn(),
  getSprite: jest.fn().mockReturnValue(mockSprite),
})));

const players = {
  player1: new Player(),
  player2: new Player(),
};

describe('Game', () => {
  const game = new Game(Object.values(players));

  describe('#getLastState', () => {
    it('should return a state', () => {
      expect(game.getLastState()).toEqual(expect.arrayContaining([
        Sprite,
      ]));
    });
  });

  describe('#tick', () => {
    game.tick();

    it('should call player.tick() for each gameObject', () => {
      game.gameObjects.forEach((gameObject) => {
        expect(gameObject.tick).toBeCalled();
      });
    });
  });

  describe('#start', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    it('should create interval', () => {
      game.start();
      expect(setInterval).toBeCalledWith(expect.any(Function), 300);
    });

    it('should call game.tick', () => {
      game.start();
      game.tick = jest.fn();
      expect(game.tick).not.toBeCalled();
      setInterval.mock.calls[0][0]();
      expect(game.tick).toHaveBeenCalledTimes(1);
      game.tick.mockRestore();
    });
  });

  describe('#pause', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    it('should stop calling game.tick()', () => {
      game.pause();
      expect(clearInterval).toBeCalledWith(game.interval);
    });
  });
});
