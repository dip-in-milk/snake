export default class Pixel {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static createVector(x, y, direction, length) {
    let pixel = new this(x, y);
    const vector = [pixel];
    while (vector.length < length) {
      pixel = pixel.createSibling(direction);
      vector.push(pixel);
    }
    return vector;
  }

  createSibling([x, y]) {
    return new this.constructor(this.x + x, this.y + y);
  }

  move([x, y]) {
    this.x += x;
    this.y += y;
  }

  /**
   * Returns relative distance to another pixel
   * @param {Pixel} pixel
   * @returns {Array<Number, Number>} relative distance
   */
  getRelativeDistance(pixel) {
    return [
      pixel.x - this.x,
      pixel.y - this.y,
    ];
  }
}
