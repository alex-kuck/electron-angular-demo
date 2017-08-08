import { ElectronAngularDemoPage } from './app.po';

describe('electron-angular-demo App', () => {
  let page: ElectronAngularDemoPage;

  beforeEach(() => {
    page = new ElectronAngularDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
