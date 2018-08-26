import Snake from './Snake';

export default class Game {
  constructor(width, height) {
    this.gameObjects = [];
    this.players = [];
    this.world = {
      width,
      height,
    };
  }

  join(player) {
    const gameObject = new Snake(player);
    this.players.push(player);
    Object.assign(player, {
      gameObject,
    });
  }

  leave(player) {
    delete this.gameObjects[
      this.gameObjects.findIndex(go => go === player.gameObject)
    ];
    delete this.players[
      this.players.findIndex(pl => pl === player)
    ];
  }

  getObjectsOnPixels(sprite) {
    return this.gameObjects
      .filter(gameObject => gameObject.sprite.pixels
        .find(pixel => sprite
          .find(({ x, y }) => x === pixel.x && y === pixel.y)));
  }

  /**
   * Returns last Sprite state for all GameObjects
   * @returns {Array<Sprite>} Array of Sprites for each game object
   */
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
}
