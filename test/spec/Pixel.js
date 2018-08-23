import Pixel from '../../src/Pixel';
import DIRECTION from '../../src/DIRECTION';

describe('Pixel', () => {
  describe('#createVector', () => {
    it('should create Array<Pixel>', () => {
      const vector = Pixel.createVector(5, 5, DIRECTION.DOWN, 5);

      expect(vector).toEqual(expect.arrayContaining([
        expect.objectContaining({
          x: expect.any(Number),
          y: expect.any(Number),
        }),
      ]));
    });
  });

  describe('#move', () => {
    const pixel = new Pixel(5, 5);
    pixel.move([-1, 1]);

    it('should change pixel`s X', () => {
      expect(pixel).toHaveProperty('x', 4);
    });

    it('should chnage pixel`s Y', () => {
      expect(pixel).toHaveProperty('y', 6);
    });
  });

  describe('#getRelativeDistance', () => {
    const pixel = new Pixel(10, 10);
    it('should return Distance', () => {
      expect(pixel.getRelativeDistance({
        x: 1,
        y: 1,
      })).toEqual([-9, -9]);
    });
  });

  describe('#createSibling', () => {
    const pixel = new Pixel(1, 1);
    it('should return a new Pixel next to the first', () => {
      const newPixel = pixel.createSibling(DIRECTION.DOWN);
      expect(newPixel).toHaveProperty('x', 1);
      expect(newPixel).toHaveProperty('y', 2);
    });
  });
});
