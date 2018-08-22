import Snake from '../../src/Snake';
import position from '../mock/position';
import Sprite from '../mock/Sprite';

describe('Snake', () => {
  const snake = new Snake(position);
  describe('#constructor', () => {
    it('should have sprite property', () => {
      expect(snake).toHaveProperty('sprite', Sprite);
    });
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
});
