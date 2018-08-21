import Player from './Player';

const INTERVAL = 300;

export default class Game {
  constructor() {
    this.players = [];
    this.world = {
      width: 20,
      height: 20,
    };
    this.state = [];
    this.tick();
  }

  getLastState() {
    return this.state[this.state.legnth - 1];
  }

  tick() {
    this.state.push(this.players.map(player => player.move()));
  }

  addPlayer() {
    const player = new Player(this);
    this.players.push(player);
    return player.getControls();
  }

  start() {
    this.interval = setInterval(() => this.tick(), INTERVAL);
  }

  pause() {
    clearInterval(this.interval);
  }
}
