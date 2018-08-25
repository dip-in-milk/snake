import DIRECTION from './DIRECTION';
import Pixel from './Pixel';

export const FRIENDS = {
  Snake: ['Fruit'],
};

export const INITIAL = {
  Snake: {
    legnth: 4,
    direction: DIRECTION.UP,
    bounty: 100,
  },
  Fruit: {
    legnth: 1,
    direction: DIRECTION.NULL,
    bounty: 100,
  },
  GameObject: {
    legnth: 0,
    direction: DIRECTION.NULL,
    bounty: 100,
  },
};

/**
 * Game Object
 */
export default class GameObject {
  static getInitial(gameObject) {
    const initial = INITIAL[gameObject.constructor.name];
    initial.sprite = new Array(initial.legnth)
      .fill()
      .map((v, i, arr) => {
        try {
          const pixel = arr[i - 1];
          return pixel.createSibling(initial.direction);
        } catch (err) {
          return new Pixel();
        }
      });
    return initial;
  }

  constructor(game) {
    this.game = game;
    Object.assign(this, this.constructor.getInitial(this));
  }

  /**
   * Being killed by a gameObject
   * @returns undefined
   */
  die() {
    this.sprite = [];
    this.direction = DIRECTION.NULL;
  }

  consume(gameObject) {
    gameObject.die();
    this.reward(gameObject.bounty);
  }

  reward(bounty) {
    this.score += bounty;
  }

  /**
   * Collides with another game object
   * @param {GameObject} gameObject gameObject this collides to
   * @returns undefined
   */
  collide(gameObject) {
    return gameObject.isFriendly(this) ? this.consume(gameObject) : this.die(gameObject);
  }

  /**
   * Checks if the given GameObject is friendly
   * @param {GameObject} gameObject another game object
   * @returns {boolean}
   */
  isFriendly(gameObject) {
    return FRIENDS[this.constructor.name].includes(gameObject.constructor.name);
  }
}
