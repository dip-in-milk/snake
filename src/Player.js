export default class Player {
  constructor(game) {
    this.game = game;
    game.join(this);
  }

  getControls() {
    return this.gameObject.getControls();
  }
}
