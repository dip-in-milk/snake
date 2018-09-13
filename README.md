# Snake Game Engine

[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Slack][slack-image]][slack-url]

## Install
```js
npm install --save @dip-in-milk/snake
```

## API

```js
import Snake from '@dip-in-milk/snake';

// create a new Game with width and height
const game = new Game(20, 20);

// create a new Player
const player1 = new Player(game);

// add a fruit
game.gameObjects.push(new Fruit());

// start ticking :)
setInterval(() => game.tick(), 100);
```


[npm-image]: http://img.shields.io/npm/v/@dip-in-milk/snake.svg
[npm-url]: https://www.npmjs.com/package/@dip-in-milk/snake

[build-image]: https://travis-ci.org/dip-in-milk/snake.svg?branch=develop
[build-url]: https://travis-ci.org/dip-in-milk/snake

[coverage-image]: https://coveralls.io/repos/github/dip-in-milk/snake/badge.svg?branch=develop
[coverage-url]: https://coveralls.io/github/dip-in-milk/snake?branch=develop

[slack-image]: https://img.shields.io/badge/%23snake-ff69b4.svg?logo=slack&label=slack
[slack-url]: https://dip-in-milk.slack.com/messages/CCCAVG2N5
