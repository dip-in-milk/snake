import Game from './Game';
import ControllableGameObject from './ControllableGameObject';

export default class Player {
  game: Game;
  gameObject: ControllableGameObject;
  score: number = 0;

  constructor(game: Game) {
    this.game = game;
    this.gameObject = new ControllableGameObject(this.game);
    game.join(this);
  }

  getControls() {
    return this.gameObject.getControls();
  }
}
