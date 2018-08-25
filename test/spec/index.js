import Library from '../..';
import Player from '../../src/Player';
import Game from '../../src/Game';

describe('Library', () => {
  it('should export Game', () => {
    expect(Library.Game).toEqual(Game);
  });
  it('should export Player', () => {
    expect(Library.Player).toEqual(Player);
  });
});
