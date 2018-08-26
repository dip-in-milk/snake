import DIRECTION from './DIRECTION';
import Sprite from './Sprite';
import Pixel, { PLACEMENT } from './Pixel';

export const FRIENDS = {
  Snake: ['Fruit'],
};

export const INITIAL = {
  Snake: {
    length: 4,
    direction: DIRECTION.UP,
    bounty: 100,
  },
  Fruit: {
    length: 1,
    direction: DIRECTION.NULL,
    bounty: 100,
  },
  GameObject: {
    length: 0,
    direction: DIRECTION.NULL,
    bounty: 100,
  },
};

/**
 * Game Object
 */
export default class GameObject {
  static getInitial(gameObject) {
    return INITIAL[gameObject.constructor.name];
  }

  constructor(game) {
    this.game = game;
    Object.assign(this, this.constructor.getInitial(this));
    game.gameObjects.push(this);
    this.sprite = Sprite.create(this.length, this.getInitialPixel(), this.direction);
  }

  /**
   * Creates initial pixel for GameObject
   * @returns {Pixel}
   */
  getInitialPixel() {
    return Pixel.create(this.game, PLACEMENT.CENTER);
  }

  /**
   * Being killed by a gameObject
   * @returns undefined
   */
  die() {
    this.sprite.pixels = [];
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
