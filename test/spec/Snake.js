import Snake from '../../src/Snake';
import position from '../mock/position';

describe('Snake', () => {
  const snake = new Snake(position);
  describe('#constructor', () => {
    expect(snake).toHaveProperty('position', expect.arrayContaining(
      expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number),
      }),
    ));
  });

  describe('#getControls');

  describe('#grow');

  describe('#setDirection');

  describe('#getDirection');
});
