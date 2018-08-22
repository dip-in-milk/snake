import Snake from './Snake';

export default class Player {
  constructor(game) {
    this.game = game;
    this.snake = new Snake();
  }

  getControls() {
    return this.snake.getControls();
  }
}
