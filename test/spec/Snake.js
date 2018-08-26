import Snake from '../../src/Snake';

import Game from '../../src/Game';
import GameObject from '../../src/GameObject';
import Sprite from '../../src/Sprite';
import Pixel from '../../src/Pixel';

jest.mock('../../src/Pixel');
jest.mock('../../src/Sprite');
jest.mock('../../src/Game');
jest.mock('../../src/GameObject');

// Pixel.create = jest.fn().mockReturnValue(Object.assign(new Pixel(), {
//   x: 25,
//   y: 25,
// }));

const mockGame = Object.assign(new Game(), {
  gameObjects: [],
  world: {
    width: 50,
    height: 50,
  },
});

describe('Snake', () => {
  const snake = new Snake({
    game: mockGame,
  });
  Object.assign(snake, {
    game: mockGame,
  });
  snake.sprite = Object.assign(new Sprite(), {
    pixels: new Array(3).fill().map((v, i) => Object.assign(new Pixel(), {
      x: 3 * i,
      y: 3,
    })),
  });

  describe('#getControls', () => {
    it('should return controls', () => {
      expect(snake.getControls()).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            label: expect.any(String),
            method: expect.any(Function),
          }),
        ]),
      );
    });
    it('should change snake.direction', () => {
      snake.direction = [0, 0];
      snake.getControls().forEach((control) => {
        const oldDirection = snake.direction;
        control.method();
        expect(snake.direction).not.toEqual(oldDirection);
      });
    });
  });

  describe('#tick', () => {
    beforeAll(() => {
      snake.player.game.getObjectsOnPixels.mockReturnValue([]);
    });

    it('should move the snake into it`s direction', () => {
      jest.spyOn(snake, 'move');
      snake.tick();
      expect(snake.move).toBeCalledWith(snake.direction);
      snake.move.mockRestore();
    });

    it('should check for object collision', () => {
      snake.tick();
      expect(snake.player.game.getObjectsOnPixels).toBeCalledWith(snake.sprite.pixels);
    });

    describe('if collision occurs', () => {
      beforeAll(() => {
        snake.player.game.getObjectsOnPixels.mockReturnValue([
          new Snake({
            game: mockGame,
          }),
        ]);
      });

      it('should call snake.collide with each collision GameObject', () => {
        jest.spyOn(snake, 'collide');
        snake.tick();
        expect(snake.collide).toBeCalledWith(expect.any(GameObject));
        snake.collide.mockRestore();
      });
    });
  });
});
