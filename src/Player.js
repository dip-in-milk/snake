import Controls from './Controls';
import Snake from './Snake';

export default class Player {
  constructor(game) {
    this.game = game;
    this.controls = new Controls(this);
    this.snake = new Snake();
  }

  spawn() {
    this.snake.position = this.game.getSpawnPosition();
  }

  getControls() {
    return this.controls;
  }
}
