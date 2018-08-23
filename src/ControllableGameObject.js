import DIRECTION from './DIRECTION';
import GameObject from './GameObject';

export default class ControllableGameObject extends GameObject {
  getControls() {
    return [{
      label: 'up',
      method: () => {
        this.direction = DIRECTION.UP;
      },
    }, {
      label: 'down',
      method: () => {
        this.direction = DIRECTION.DOWN;
      },
    }, {
      label: 'left',
      method: () => {
        this.direction = DIRECTION.LEFT;
      },
    }, {
      label: 'right',
      method: () => {
        this.direction = DIRECTION.RIGHT;
      },
    }];
  }
}
