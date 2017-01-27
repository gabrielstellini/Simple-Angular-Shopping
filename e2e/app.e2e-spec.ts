import { SpringfieldPage } from './app.po';

describe('springfield App', function() {
  let page: SpringfieldPage;

  beforeEach(() => {
    page = new SpringfieldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
