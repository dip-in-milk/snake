import Direction from './Direction';
import GameObject from './GameObject';
import distance from './distance';
import Velocity from './Velocity';

export default class ControllableGameObject extends GameObject {
  getControls() {
    return [{
      label: 'up',
      method: () => {
        this.velocity.direction = Direction.UP;
      },
    }, {
      label: 'down',
      method: () => {
        this.velocity.direction = Direction.DOWN;
      },
    }, {
      label: 'left',
      method: () => {
        this.velocity.direction = Direction.LEFT;
      },
    }, {
      label: 'right',
      method: () => {
        this.velocity.direction = Direction.RIGHT;
      },
    }];
  }
}
