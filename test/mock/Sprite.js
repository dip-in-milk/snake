import Pixel from '../../src/Pixel';

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
