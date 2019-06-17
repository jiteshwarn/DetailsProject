import { JiteshAppPage } from './app.po';

describe('jitesh-app App', function() {
  let page: JiteshAppPage;

  beforeEach(() => {
    page = new JiteshAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
