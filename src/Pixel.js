export const PLACEMENT = {
  RANDOM: 1,
  CENTER: 2,
  GIVEN: 3,
  ZERO: 4,
};

export default class Pixel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Creates a new pixel in the given distance
   * @param {Pixel} pixel Initial pixel
   * @param {Array<Number, Number>} distance distance from the inital pixel
   * @returns {Pixel}
   */
  static createSibling(pixel, [x, y]) {
    return new this.constructor(pixel.x + x, pixel.y + y);
  }

  /**
   * Creates pixel within the game
   * @param {Game} game Game
   * @param {STRATEGY} placement placement Strategy
   * @returns {Pixel}
   */
  static create(game, placement = PLACEMENT.RANDOM) {
    let { x, y } = game;
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
      case PLACEMENT.GIVEN:
      default:
        break;
    }
    return new this.constructor(x, y);
  }

  static move(pixel, [x, y]) {
    Object.assign(pixel, {
      x: pixel.x + x,
      y: pixel.y + y,
    });
  }

  /**
   * Returns relative distance to another pixel
   * @param {Pixel} pixel
   * @returns {Array<Number, Number>} relative distance
   */
  static getRelativeDistance(pixel1, pixel2) {
    return [
      pixel2.x - pixel1.x,
      pixel2.y - pixel1.y,
    ];
  }
}

Pixel.constructor = Pixel;
