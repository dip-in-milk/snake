import DIRECTION from './DIRECTION';
import Snake from './Snake';
import Fruit from './Fruit';

export default class Game {
  constructor(players) {
    this.gameObjects = [
      new Fruit(),
    ];
    this.players = [];
    this.world = {
      width: 20,
      height: 20,
    };
    players.forEach(player => this.join(player));
  }

  join(player) {
    const snake = new Snake(player);
    player.join(this, snake);
    this.players.push(player);
    this.gameObjects.push(snake);
  }

  leave(player) {
    delete this.gameObjects[
      this.gameObjects.findIndex(go => go === player.gameObject)
    ];
    delete this.players[
      this.players.findIndex(pl => pl === player)
    ];
  }

  getObjectsOnPixels(pixels) {
    return this.gameObjects
      .filter(gameObject => gameObject.sprite
        .find(pixel => pixels
          .find(({ x, y }) => x === pixel.x && y === pixel.y)));
  }

  getLastState() {
    return this.gameObjects
      .map(gameObject => gameObject.sprite);
  }

  tick() {
    this.gameObjects.forEach((gameObject) => {
      if ('tick' in gameObject) {
        gameObject.tick();
      }
    });
  }

  /**
   * Returns free location in the game for the GameObject
   * @param {GameObject} gameObject
   * @returns {Sprite}
   */
  placeSprite({ sprite }) {
    while (this.getObjectsOnPixels(sprite)) {
      sprite.shift(DIRECTION.RIGHT);
    }
  }
}
