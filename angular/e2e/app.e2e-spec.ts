import { FrameworkPage } from './app.po';

describe('abp-zero-template App', function () {
    let page: FrameworkPage;

    beforeEach(() => {
        page = new FrameworkPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        page.getCopyright().then(value => {
            expect(value).toEqual(new Date().getFullYear() + ' © Framework.');
        });
    });
});
