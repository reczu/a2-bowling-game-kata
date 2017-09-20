import { A2BowlingGamePage } from './app.po';

describe('a2-bowling-game App', () => {
  let page: A2BowlingGamePage;

  beforeEach(() => {
    page = new A2BowlingGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
