import { WattoPage } from './app.po';

describe('watto App', () => {
  let page: WattoPage;

  beforeEach(() => {
    page = new WattoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
