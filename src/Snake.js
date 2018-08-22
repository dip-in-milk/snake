import DIRECTION from './DIRECTION';

export default class Snake {
  constructor(sprite) {
    this.sprite = sprite;
    this.direction = [DIRECTION.UP];
  }

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
