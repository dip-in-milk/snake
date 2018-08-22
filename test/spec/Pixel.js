import Pixel from '../../src/Pixel';
import DIRECION from '../../src/DIRECTION';

describe('Pixel', () => {
  describe('#createVector', () => {
    it('should create Array<Pixel>', () => {
      const vector = Pixel.createVector(5, 5, DIRECION.DOWN, 5);

      expect(vector).toEqual(expect.arrayContaining([
        expect.objectContaining({
          x: expect.any(Number),
          y: expect.any(Number),
        }),
      ]));
    });
  });
});
