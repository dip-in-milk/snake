import Pixel, { PLACEMENT } from './Pixel';
import Direction from './Direction';
import Velocity from './Velocity';

export default class Sprite {
  pixels: Pixel[];

  constructor(pixels: Pixel[] = []) {
    this.pixels = pixels;
  }

  /**
   * Creates an array from given props
   * @param {Number} length amount of pixels in the Sprite
   * @returns {Sprite}
   */
  static create(length, { x, y }: Pixel, direction: Direction = Direction.DOWN) {
    const pixels = [Pixel.create({ x, y }, PLACEMENT.FIXED)];
    while (pixels.length < length) {
      const distance = new Velocity(direction).getDistance();
      pixels.push(Pixel.createSibling(pixels[pixels.length - 1], distance));
    }
    return new this(pixels);
  }

  move(direction) {
    this.pixels.forEach((pixel) => {
      Pixel.move(pixel, direction);
    });
  }
}
