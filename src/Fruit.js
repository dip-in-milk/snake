import GameObject from './GameObject';
import Pixel, { PLACEMENT } from './Pixel';

export default class Fruit extends GameObject {
  /**
   * Returns Fruit initial Pixel
   * @returns {Pixel}
   */
  getInitialPixel() {
    return Pixel.create(this.game, PLACEMENT.RANDOM);
  }
}
