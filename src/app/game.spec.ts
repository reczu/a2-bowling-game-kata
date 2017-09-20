import {Game} from './game';

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  it('should return score 0 for gutter game', () => {
    for (let i = 0; i < 20; ++i) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it('should return score 20 for all rolls one', () => {
    for (let i = 0; i < 20; ++i) {
        game.roll(1);
    }
    expect(game.score()).toBe(20);
  });
});
