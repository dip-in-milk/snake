# <img src="https://raw.githubusercontent.com/dip-in-milk/snake-logo/master/src/Engine.svg?sanitize=true" height="100" alt="Snake Engine Logo">

[![NPM version][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![GitHub issues][issues-image]][issues-url]
[![GitHub stars][github-stars-img]][github-stars-url]
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

[npm-img]: https://img.shields.io/npm/v/@dip-in-milk/snake.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/@dip-in-milk/snake

[build-img]: https://img.shields.io/travis/dip-in-milk/snake/develop.svg?logo=travis
[build-url]: https://travis-ci.org/dip-in-milk/snake

[coverage-image]: https://coveralls.io/repos/github/dip-in-milk/snake/badge.svg?branch=develop
[coverage-url]: https://coveralls.io/github/dip-in-milk/snake?branch=develop

[slack-image]: https://img.shields.io/badge/%23snake-ff69b4.svg?logo=slack&label=slack
[slack-url]: https://dip-in-milk.slack.com/messages/CCCAVG2N5

[issues-image]: https://img.shields.io/github/issues/dip-in-milk/snake.svg?logo=github
[issues-url]: https://github.com/dip-in-milk/snake/issues

[github-stars-img]: https://img.shields.io/github/stars/dip-in-milk/snake.svg?logo=github
[github-stars-url]: https://github.com/dip-in-milk/snake/stargazers
