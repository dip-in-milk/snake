// class Direction extends Array {
//   getOpposite() {
//     return this.map(v => v * -1);
//   }
// }

const DIRECTION = {
  UP: [0, -1],
  DOWN: [0, 1],
  LEFT: [-1, 0],
  RIGHT: [1, 0],
  NULL: [0, 0],
};

export default DIRECTION;
