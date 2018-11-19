import Direction from './Direction';

export type Distance = [number, number];

export const initial: { [key: string]: Distance } = {
  [Direction.UP]: [0, -1],
  [Direction.DOWN]: [0, 1],
  [Direction.LEFT]: [-1, 0],
  [Direction.RIGHT]: [1, 0],
  [Direction.NULL]: [0, 0],
};

export default class Velocity {

  direction : Direction;
  speed: number;

  constructor(direction, speed = 1) {
    this.direction = direction;
    this.speed = speed;
  }

  getDistance(): Distance {
    const [x, y] = initial[this.direction];
    return [x * this.speed, y * this.speed];
  }
}
