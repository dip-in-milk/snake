import Player from '../../src/Player';
import Game from '../../src/Game';

jest.mock('../../src/Game');
jest.mock('../../src/ControllableGameObject');

const game = new Game();

describe('Player', () => {
  const player = new Player(game);

  describe('#constructor', () => {
    it('should have game', () => {
      expect(player).toHaveProperty('game', game);
    });

    it('should call game.join', () => {
      expect(game.join).toBeCalledWith(player);
    });
  });

  describe('#getControls', () => {
    it('should call player.gameObject.getControls', () => {
      player.gameObject = {
        getControls: jest.fn(),
      };
      player.getControls();
      expect(player.gameObject.getControls).toBeCalled();
    });
  });
});
