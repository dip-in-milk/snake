import Snake from '../../src/Snake';
import mockSprite from '../mock/sprite';

import Game from '../../src/Game';
import GameObject from '../../src/GameObject';

jest.mock('../../src/Pixel');
jest.mock('../../src/Game');

const mockGame = new Game();

describe('Snake', () => {
  const snake = new Snake({
    game: mockGame,
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
      expect(snake.player.game.getObjectsOnPixels).toBeCalledWith(snake.sprite);
    });

    describe('if collision occurs', () => {
      beforeAll(() => {
        snake.player.game.getObjectsOnPixels.mockReturnValue([
          new Snake({
            game: mockGame,
          }, mockSprite),
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
