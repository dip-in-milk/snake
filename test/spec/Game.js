import Game from '../../src/Game';
import Player from '../../src/Player';
import Snake from '../../src/Snake';
import Pixel from '../../src/Pixel';
import Fruit from '../../src/Fruit';

jest.mock('../../src/Snake');
jest.mock('../../src/Fruit');
jest.mock('../../src/Player');

const game = new Game([
  new Player(),
  new Player(),
]);

beforeAll(() => {
  game.gameObjects.forEach((gameObject, i) => {
    Object.defineProperty(gameObject, 'sprite', {
      value: [{
        x: i * 10,
        y: i * 10,
      }],
    });
  });
});

describe('Game', () => {
  describe('#getObjectsOnPixels', () => {
    it('should filter all game.gameObjects to find objects at given pixels', () => {
      expect(game.getObjectsOnPixels([{
        x: 10,
        y: 10,
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
      new Fruit(),
      new Snake(),
    ];
    game.tick();

    it('should call player.tick() for each gameObject which has tick method', () => {
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
    const player = new Player();
    beforeAll(() => {
      player.join = jest.fn((g, go) => {
        player.game = g;
        player.gameObject = go;
      });
      game.join(player);
    });
    it('should call player.join with game and a new Snake', () => {
      expect(player.join).toBeCalledWith(game, expect.any(Snake));
    });
    it('should keep reference to the player', () => {
      expect(game.players).toContain(player);
    });
    it('should keep reference to it`s GameObject', () => {
      expect(game.gameObjects).toContain(player.gameObject);
    });
  });

  describe('#leave', () => {
    const player = new Player();
    beforeAll(() => {
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

  describe('#placeSprite', () => {
    const mockGameObject = {
      sprite: [
        new Pixel(),
      ],
    };

    beforeAll(() => {
      game.gameObjects = [];
    });
    beforeEach(() => {
      game.getObjectsOnPixels = jest.fn()
        .mockReturnValue(false)
        .mockReturnValueOnce(true);
    });

    it('should call Game.getObjectsOnPixels to check for empty space', () => {
      game.placeSprite(mockGameObject);
      expect(game.getObjectsOnPixels).toBeCalledWith(mockGameObject.sprite);
    });

    describe('if place is occupied', () => {
      it('should shift the sprite', () => {
        mockGameObject.sprite.shift = jest.fn();
        game.placeSprite(mockGameObject);
        expect(mockGameObject.sprite.shift).toBeCalledWith(
          expect.arrayContaining([
            expect.any(Number),
          ]),
        );
      });
    });
  });
});
