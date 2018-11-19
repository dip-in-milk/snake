import Snake from './Snake';
import Player from './Player';
import Pixel from './Pixel';

interface World {
  width: number;
  height: number;
}

export default class Game {

  gameObjects = [];
  players: Player[] = [];
  world: World;

  constructor(width: number, height: number) {
    this.world = {
      width,
      height,
    };
  }

  join(player: Player) {
    const gameObject = new Snake(player);
    this.players.push(player);
    player.gameObject = gameObject;
  }

  leave(player) {
    delete this.gameObjects[this.gameObjects.findIndex(go => go === player.gameObject)
];
    delete this.players[this.players.findIndex(pl => pl === player)
];
  }

  getObjectsOnPixels(sprite): Pixel[] {
    return this.gameObjects
      .filter(gameObject => gameObject.sprite.pixels
        .find(pixel => sprite
          .find(({ x, y }) => x === pixel.x && y === pixel.y)));
  }

  /**
   * Returns last Sprite state for all GameObjects
   */
  getLastState(): Pixel[] {
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
