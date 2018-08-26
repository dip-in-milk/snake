import Pixel, { PLACEMENT } from './Pixel';
import DIRECTION from './DIRECTION';

export default class Sprite {
  constructor(pixels = []) {
    this.pixels = pixels;
  }

  /**
   * Creates an array from given props
   * @param {Number} length amount of pixels in the Sprite
   * @param {Pixel} pixel initial pixel position
   * @param {DIRECTION} direction direction of the pixels
   * @returns {Sprite}
   */
  static create(length, { x, y }, direction = DIRECTION.DOWN) {
    const pixels = [Pixel.create({ x, y }, PLACEMENT.GIVEN)];
    while (pixels.length < length) {
      pixels.push(Pixel.createSibling(pixels[pixels.length - 1], direction));
    }
    return new this(pixels);
  }

  move(direction) {
    this.pixels.forEach((pixel) => {
      Pixel.move(pixel, direction);
    });
  }
}
