const DIRECTION = {
  UP: [0, -1],
  DOWN: [0, 1],
  LEFT: [-1, 0],
  RIGHT: [1, 0],
};

class Pixel {
  constructor(x, y) {
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
}
export default class Snake {
  constructor(position = Pixel.createVector()) {
    this.position = position;
  }
}
