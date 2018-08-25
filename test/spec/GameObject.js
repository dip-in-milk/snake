import GameObject from '../../src/GameObject';
import Game from '../../src/Game';

jest.mock('../../src/Game');

const mockGame = new Game();
const gameObject = new GameObject(mockGame);
const anotherGameObject = new GameObject(mockGame);

describe('GameObject', () => {
  describe('#constructor', () => {
    it('should define GameObject.sprite', () => {
      expect(gameObject).toHaveProperty('sprite');
    });
  });

  describe('#die', () => {
    gameObject.die();
    it('should clear it`s sprite', () => {
      expect(gameObject.sprite).toHaveLength(0);
    });

    it('should reset it`s direction', () => {
      expect(gameObject.direction).toEqual([0, 0]);
    });
  });

  describe('#consume', () => {
    it('should kill the other GameObject', () => {
      jest.spyOn(anotherGameObject, 'die');
      gameObject.consume(anotherGameObject);
      expect(anotherGameObject.die).toBeCalledWith();
      anotherGameObject.die.mockRestore();
    });

    it('should be rewarded', () => {
      jest.spyOn(gameObject, 'reward');
      gameObject.consume(anotherGameObject);
      expect(gameObject.reward).toBeCalledWith(anotherGameObject.bounty);
      gameObject.reward.mockRestore();
    });
  });

  describe('#collide', () => {
    it('should check whether the given object is friendly', () => {
      anotherGameObject.isFriendly = jest.fn();
      gameObject.collide(anotherGameObject);
      expect(anotherGameObject.isFriendly).toBeCalledWith(gameObject);
    });

    describe('friendly object', () => {
      const friendlyGameObject = new GameObject(mockGame);

      friendlyGameObject.isFriendly = jest.fn(() => true);

      it('should consume the friendly game object', () => {
        jest.spyOn(gameObject, 'consume');
        gameObject.collide(friendlyGameObject);
        expect(gameObject.consume).toBeCalledWith(friendlyGameObject);
      });
    });

    describe('non-friendly object', () => {
      const nonFriendlyGameObject = new GameObject(mockGame);

      nonFriendlyGameObject.isFriendly = jest.fn(() => false);

      it('should be killed by the non-friendly game object', () => {
        jest.spyOn(gameObject, 'die');
        gameObject.collide(nonFriendlyGameObject);
        expect(gameObject.die).toBeCalledWith(nonFriendlyGameObject);
      });
    });
  });
});
