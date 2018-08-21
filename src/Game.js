const INTERVAL = 300;

export default class Game {
  constructor(players) {
    this.gameObjects = [
      ...players,
    ];
    this.world = {
      width: 20,
      height: 20,
    };
  }

  getLastState() {
    return this.gameObjects.map(gameobject => gameobject.getSprite());
  }

  tick() {
    this.gameObjects.forEach((gameObject) => {
      gameObject.tick();
    });
  }

  start() {
    this.interval = setInterval(() => this.tick(), INTERVAL);
  }

  pause() {
    clearInterval(this.interval);
  }
}
