import Snake from '../../src/Snake';

describe('Snake', () => {

    describe('#constructor', () => {
        const snake = new Snake();
        expect(snake).toHaveProperty('length');
        expect(snake).toHaveProperty('direction');
    });

    describe('#getControls');

    describe('#grow');

    describe("#setDirection");

    describe("#getDirection");
});