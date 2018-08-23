import ControllableGameObject from './ControllableGameObject';

export default class Snake extends ControllableGameObject {
  constructor(player) {
    super(player.game);
    this.player = player;
  }

  move(direction) {
    let nextDistance = direction;
    this.sprite.forEach((pixel, i, sprite) => {
      const distance = pixel.getRelativeDistance(sprite[i + 1]);
      pixel.move(nextDistance);
      nextDistance = distance;
    });
  }

  tick() {
    this.move(this.direction);

    this.game.getObjectsOnPixels(this.sprite)
      .forEach((gameObject) => {
        this.collide(gameObject);
      });
  }
}
