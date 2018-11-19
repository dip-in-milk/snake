import Direction from './Direction';

export type Distance = [number, number];

const initial: { [key: string]: Distance } = {
  [Direction.UP]: [0, -1],
  [Direction.DOWN]: [0, 1],
  [Direction.LEFT]: [-1, 0],
  [Direction.RIGHT]: [1, 0],
  [Direction.NULL]: [0, 0],
};

export default function get(direction: Direction, speed: number = 1): Distance {
  const [x, y] = initial[direction];
  return [x * speed, y * speed];
}
