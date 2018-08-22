import Player from '../../src/Player';

const mockControls = {};
const mockGame = {};

jest.mock('../../src/Snake', () => jest.fn().mockImplementation(() => ({
  getControls: jest.fn(() => mockControls),
})));

describe('Player', () => {
  const player = new Player(mockGame);

  it('should have game property', () => {
    expect(player).toHaveProperty('game', mockGame);
  });

  it('should have snake', () => {
    expect(player).toHaveProperty('snake', expect.any(Object));
  });

  describe('#getControls', () => {
    it('should get snake controls', () => {
      expect(player.getControls()).toEqual(mockControls);
      expect(player.snake.getControls).toBeCalled();
    });
  });
});
