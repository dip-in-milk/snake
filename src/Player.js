export default class Player {
  join(game, gameObject) {
    this.game = game;
    this.gameObject = gameObject;
  }

  getControls() {
    return this.gameObject.getControls();
  }
}
