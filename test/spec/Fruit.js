import Fruit from '../../src/Fruit';
import Pixel, { PLACEMENT } from '../../src/Pixel';

jest.mock('../../src/GameObject');
jest.mock('../../src/Pixel');

const fruit = new Fruit();

describe('Fruit', () => {
  describe('#getInitialPixel', () => {
    it('should create Pixel with STRATEGY.RANDOM', () => {
      fruit.getInitialPixel();
      expect(Pixel.create).toBeCalledWith(fruit.game, PLACEMENT.RANDOM);
    });
  });
});
