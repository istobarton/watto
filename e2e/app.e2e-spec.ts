import { WattoPage } from './app.po';

describe('watto App', () => {
  let page: WattoPage;

  beforeEach(() => {
    page = new WattoPage();
  });

  it('should display hello watto', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello, Watto!');
  });
});
