import { EjemploPage } from './app.po';

describe('ejemplo App', function() {
  let page: EjemploPage;

  beforeEach(() => {
    page = new EjemploPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
