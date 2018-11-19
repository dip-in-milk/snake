import ControllableGameObject from './ControllableGameObject';
import Direction from './Direction';
import Pixel from './Pixel';
import Player from './Player';
import Velocity from './Velocity';
import GameObject from './GameObject';

export default class Snake extends ControllableGameObject {

  private player: Player;

  constructor(player: Player) {
    super(player.game);
    this.player = player;
  }

  move(direction: Direction) {
    let nextDistance = direction;
    this.sprite.pixels.forEach((pixel, i, sprite) => {
      const next = sprite[i + 1];
      const distance = next ? Pixel.getRelativeDistance(pixel, next) : Velocity(Direction.NULL);
      Pixel.move(pixel, nextDistance);
      nextDistance = distance;
    });
  }

  consume(gameObject: GameObject) {
    super.consume(gameObject);
    this.reward(gameObject.bounty);
  }

  reward(bounty: number) {
    this.player.score += bounty;
  }

  tick() {
    this.move(this.velocity);

    this.game.getObjectsOnPixels(this.sprite.pixels)
      .forEach((gameObject) => {
        this.collide(gameObject);
      });
  }
}
