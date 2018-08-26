import Game from '../../src/Game';
import Player from '../../src/Player';
import Snake from '../../src/Snake';
import Fruit from '../../src/Fruit';
import Sprite from '../../src/Sprite';
import Pixel from '../../src/Pixel';

jest.mock('../../src/Snake');
jest.mock('../../src/Fruit');
jest.mock('../../src/Player');

const game = new Game(20, 20);
const player = new Player(game);

beforeAll(() => {
  game.gameObjects.forEach((go, i) => {
    const mockSprite = new Sprite();
    mockSprite.pixels = [
      new Pixel(i * 2, 0),
    ];
    Object.defineProperty(go, 'sprite', {
      value: mockSprite,
    });
  });
});

describe('Game', () => {
  describe('#constructor', () => {
    it('should define gameObjects', () => {
      expect(game).toHaveProperty('gameObjects', expect.any(Array));
    });

    it('should define players', () => {
      expect(game).toHaveProperty('players', expect.any(Array));
    });

    it('should define world', () => {
      expect(game).toHaveProperty('world', expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number),
      }));
    });
  });

  describe('#getObjectsOnPixels', () => {
    it('should filter all game.gameObjects to find objects at given pixels', () => {
      expect(game.getObjectsOnPixels([{
        x: 0,
        y: 0,
      }])).toEqual(expect.arrayContaining([
        expect.any(Snake),
      ]));
    });
  });

  describe('#getLastState', () => {
    it('should return an array of sprites', () => {
      expect(game.getLastState()).toEqual(expect.arrayContaining(
        game.gameObjects.map(go => go.sprite),
      ));
    });
  });

  describe('#tick', () => {
    game.gameObjects = [
      new Snake(),
      new Fruit(),
    ];

    it('should call player.tick() for each gameObject which has tick method', () => {
      game.gameObjects[0].tick = jest.fn();
      game.tick();
      game.gameObjects.forEach((gameObject) => {
        if (gameObject.tick) {
          expect(gameObject.tick).toBeCalledWith();
        } else {
          expect(gameObject.tick).toBe(undefined);
        }
      });
    });
  });

  describe('#join', () => {
    beforeAll(() => {
      jest.spyOn(game.players, 'push');
      jest.spyOn(Object, 'assign');
      game.join(player);
    });
    it('should push player to the pool', () => {
      expect(game.players.push).toBeCalledWith(player);
    });

    it('should assign player.gameObject', () => {
      expect(Object.assign).toBeCalledWith(player, {
        gameObject: expect.any(Snake),
      });
    });
  });

  describe('#leave', () => {
    beforeAll(() => {
      game.players = [];
      game.join(player);
      game.leave(player);
    });

    it('should not contain player within the players', () => {
      expect(game.players).not.toContain(player);
    });

    it('should not contain player`s GameObject within the gameObjects', () => {
      expect(game.gameObjects).not.toContain(player.gameObject);
    });
  });
});
