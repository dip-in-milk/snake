import Direction from './Direction';
import Sprite from './Sprite';
import Game from './Game';
import Pixel, { PLACEMENT } from './Pixel';
import Fruit from './Fruit';
import Snake from './Snake';
import Velocity from './Velocity';

export const friends = new WeakMap<(typeof GameObject), (typeof GameObject)[]>([
  [Snake, [Fruit]],
]);

interface GameObjectInitial {
  length: number;
  velocity: Velocity;
  bounty: number;
}

/**
 * Game Object
 */
export default class GameObject implements GameObjectInitial {

  game: Game;
  sprite: Sprite;
  length: number;
  bounty: number;
  velocity: Velocity;

  static getInitial(gameObject): { length: number, velocity: [number, number]} {
    return initial[gameObject.constructor];
  }

  constructor(game) {
    this.game = game;
    Object.assign(this, GameObject.getInitial(this));
    game.gameObjects.push(this);
    this.sprite = Sprite.create(this.length, this.getInitialPixel(), this.velocity);
  }

  /**
   * Creates initial pixel for GameObject
   */
  getInitialPixel(): Pixel {
    return Pixel.create(this.game, PLACEMENT.CENTER);
  }

  /**
   * Being killed by a gameObject
   */
  die(gameObject: GameObject) {
    gameObject.consume(this);
    this.sprite.pixels = [];
    this.velocity = new Velocity(Direction.NULL);
  }

  consume(gameObject: GameObject) {
    gameObject.die(gameObject);
  }

  /**
   * Collides with another game object
   */
  collide(gameObject: GameObject) {
    return gameObject.isFriendly(this) ? this.consume(gameObject) : this.die(gameObject);
  }

  /**
   * Checks if the given GameObject is friendly
   */
  isFriendly(gameObject: GameObject): boolean {
    return friends.get(this.constructor).includes(gameObject.constructor);
  }
}

export const initial = new WeakMap<(typeof GameObject), GameObjectInitial>([
  [Snake, {
    length: 4,
    velocity: new Velocity(Direction.UP),
    bounty: 100,
  }],
  [Fruit, {
    length: 1,
    velocity: new Velocity(Direction.NULL),
    bounty: 100,
  }],
  [GameObject, {
    length: 0,
    velocity: new Velocity(Direction.NULL),
    bounty: 100,
  }],
]);
