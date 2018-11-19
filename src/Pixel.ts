import Game from './Game';
import { Distance } from './distance';

export const enum PLACEMENT {
  RANDOM,
  CENTER,
  FIXED,
  ZERO,
}

export default class Pixel {
  x: number;
  y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Creates a new pixel in the given distance
   */
  static createSibling(shape: Pixel, [x, y]: Distance): Pixel {
    return new Pixel(shape.x + x, shape.y + y);
  }

  /**
   * Creates pixel within the game
   * @returns {Pixel}
   */
  static create(game: Game, placement: PLACEMENT = PLACEMENT.RANDOM): Pixel {
    let x;
    let y;
    switch (placement) {
      case PLACEMENT.RANDOM:
        x = Math.floor(Math.random() * game.world.width);
        y = Math.floor(Math.random() * game.world.height);
        break;
      case PLACEMENT.CENTER:
        x = Math.round(game.world.width / 2);
        y = Math.round(game.world.height / 2);
        break;
      case PLACEMENT.ZERO:
        x = 0;
        y = 0;
        break;
      case PLACEMENT.FIXED:
        break;
    }
    return new Pixel(x, y);
  }

  /**
   * Moves shape with Distance
   */
  static move(pixel: Pixel, [x, y]: Distance) {
    Object.assign(pixel, {
      x: pixel.x + x,
      y: pixel.y + y,
    });
  }

  /**
   * Returns relative distance to another pixel
   */
  static getRelativeDistance(pixel1: Pixel, pixel2: Pixel): Distance {
    return [
      pixel2.x - pixel1.x,
      pixel2.y - pixel1.y,
    ];
  }
}

Pixel.constructor = Pixel;
