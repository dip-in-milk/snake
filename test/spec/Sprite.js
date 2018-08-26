import Sprite from '../../src/Sprite';
import Pixel from '../../src/Pixel';
import DIRECTION from '../../src/DIRECTION';

jest.mock('../../src/Pixel');

describe('Sprite', () => {
  describe('#constructor', () => {
    it('should create empty sprite', () => {
      const sprite = new Sprite();
      expect(sprite.pixels).toEqual(expect.arrayContaining([]));
    });

    it('should create Sprite with given pixels', () => {
      const sprite = new Sprite([
        new Pixel(),
      ]);
      expect(sprite).toHaveProperty('pixels', expect.arrayContaining([
        expect.any(Pixel),
      ]));
    });
  });

  describe('#move', () => {
    const sprite = new Sprite([
      new Pixel(),
      new Pixel(),
      new Pixel(),
    ]);
    it('should move each pixel in the given direction', () => {
      sprite.move(DIRECTION.UP);
      sprite.pixels.forEach((pixel) => {
        expect(Pixel.move).toHaveBeenLastCalledWith(pixel, DIRECTION.UP);
      });
    });
  });

  describe('#create', () => {
    const length = 4;
    describe('without direction', () => {
      const sprite = Sprite.create(length, {
        x: 0,
        y: 0,
      });

      it('should result in a Sprite', () => {
        expect(sprite).toEqual(expect.any(Sprite));
      });
    });

    describe('with direction', () => {
      beforeAll(() => {
        jest.spyOn(Sprite, 'constructor');
      });

      const sprite = Sprite.create(length, {
        x: 2,
        y: 2,
      }, DIRECTION.DOWN);

      it('should result in a Sprite', () => {
        expect(sprite).toEqual(expect.any(Sprite));
      });
    });
  });
});
