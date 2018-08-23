import Player from '../../src/Player';
import Game from '../../src/Game';
import ControllableGameObject from '../../src/ControllableGameObject';

jest.mock('../../src/Game');
jest.mock('../../src/ControllableGameObject');

const mockGame = new Game();
const mockGameObject = new ControllableGameObject();

describe('Player', () => {
  const player = new Player();

  describe('#join', () => {
    player.join(mockGame, mockGameObject);
    it('should be assigned to a game', () => {
      expect(player).toHaveProperty('game', mockGame);
    });

    it('should be given a gameObject', () => {
      expect(player).toHaveProperty('gameObject', mockGameObject);
    });
  });

  describe('#getControls', () => {
    it('should call player.gameObject.getControls', () => {
      player.getControls();
      expect(player.gameObject.getControls).toBeCalled();
    });
  });
});
