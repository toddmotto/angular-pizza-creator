import { AngularPizzaCreatorPage } from './app.po';

describe('angular-pizza-creator App', function() {
  let page: AngularPizzaCreatorPage;

  beforeEach(() => {
    page = new AngularPizzaCreatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
