import Pixel from '../../src/Pixel';

// jest.mock('../../src/Pixel', () => jest.fn().mockImplementation(() => ({
//   x: 5,
//   y: 5,
//   createSibling: () => jest.fn(),
// })));

jest.mock('../../src/Pixel');

const snake = [
  new Pixel(),
  new Pixel(),
  new Pixel(),
  new Pixel(),
];

export default {
  snake,
};
