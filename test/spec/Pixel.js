import Pixel, { PLACEMENT } from '../../src/Pixel';
import DIRECTION from '../../src/DIRECTION';
import Game from '../../src/Game';

jest.mock('../../src/Game');

describe('Pixel', () => {
  describe('#move', () => {
    const pixel = new Pixel(5, 5);
    Pixel.move(pixel, [-1, 1]);

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
      expect(Pixel.getRelativeDistance(pixel, {
        x: 1,
        y: 1,
      })).toEqual([-9, -9]);
    });
  });

  describe('#createSibling', () => {
    const pixel = new Pixel(1, 1);
    it('should return a new Pixel next to the first', () => {
      const newPixel = Pixel.createSibling(pixel, DIRECTION.DOWN);
      expect(newPixel).toHaveProperty('x', 1);
      expect(newPixel).toHaveProperty('y', 2);
    });
  });

  describe('#create', () => {
    const game = new Game();
    game.world = {
      width: 100,
      height: 100,
    };

    describe('without placement', () => {
      const pixel = Pixel.create(game);

      it('should return a new pixel', () => {
        expect(pixel).toEqual(expect.any(Pixel));
      });

      it('should within the Game world dimensitions', () => {
        expect(pixel.x).toBeGreaterThanOrEqual(0);
        expect(pixel.x).toBeLessThanOrEqual(game.world.width);
        expect(pixel.y).toBeGreaterThanOrEqual(0);
        expect(pixel.y).toBeLessThanOrEqual(game.world.height);
      });
    });

    describe('PLACEMENT.RANDOM', () => {
      const pixel = Pixel.create(game, PLACEMENT.RANDOM);

      it('should return a new pixel', () => {
        expect(pixel).toEqual(expect.any(Pixel));
      });

      it('should within the Game world dimensitions', () => {
        expect(pixel.x).toBeGreaterThanOrEqual(0);
        expect(pixel.x).toBeLessThanOrEqual(game.world.width);
        expect(pixel.y).toBeGreaterThanOrEqual(0);
        expect(pixel.y).toBeLessThanOrEqual(game.world.height);
      });
    });

    describe('PLACEMENT.CENTER', () => {
      const pixel = Pixel.create(game, PLACEMENT.CENTER);

      it('should return a new pixel', () => {
        expect(pixel).toEqual(expect.any(Pixel));
      });

      it('should within the Game world dimensitions', () => {
        expect(pixel.x).toBeGreaterThanOrEqual(0);
        expect(pixel.x).toBeLessThanOrEqual(game.world.width);
        expect(pixel.y).toBeGreaterThanOrEqual(0);
        expect(pixel.y).toBeLessThanOrEqual(game.world.height);
      });
    });

    describe('PLACEMENT.ZERO', () => {
      const pixel = Pixel.create(game, PLACEMENT.ZERO);

      it('should return a new pixel', () => {
        expect(pixel).toEqual(expect.any(Pixel));
      });

      it('should within the Game world dimensitions', () => {
        expect(pixel.x).toBeGreaterThanOrEqual(0);
        expect(pixel.x).toBeLessThanOrEqual(game.world.width);
        expect(pixel.y).toBeGreaterThanOrEqual(0);
        expect(pixel.y).toBeLessThanOrEqual(game.world.height);
      });
    });
  });
});
