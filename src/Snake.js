import ControllableGameObject from './ControllableGameObject';
import DIRECTION from './DIRECTION';
import Pixel from './Pixel';

export default class Snake extends ControllableGameObject {
  constructor(player) {
    super(player.game);
    this.player = player;
  }

  move(direction) {
    let nextDistance = direction;
    this.sprite.pixels.forEach((pixel, i, sprite) => {
      const next = sprite[i + 1];
      const distance = next ? Pixel.getRelativeDistance(pixel, next) : DIRECTION.NULL;
      Pixel.move(pixel, nextDistance);
      nextDistance = distance;
    });
  }

  tick() {
    this.move(this.direction);

    this.game.getObjectsOnPixels(this.sprite.pixels)
      .forEach((gameObject) => {
        this.collide(gameObject);
      });
  }
}
