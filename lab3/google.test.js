
const { Builder, By, Key, until } = require('selenium-webdriver');

async function goToGoogleSite(driver) {
    await driver.get('https://www.google.com');
    // const acceptCookieBtn = await driver.findElement(By.id('L2AGLb'))
    const acceptCookieBtn = await driver.findElement(By.xpath("//button[@id='L2AGLb']"))
    const actions = driver.actions({ async: true });
    await actions.click(acceptCookieBtn).perform();
}

describe('google_test', () => {
    let driver;
    beforeAll(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await goToGoogleSite(driver);
    });

    test('title', async () => {
        const title = await driver.getTitle();
        expect(title).toStrictEqual('Google');
    });

    test('logo', () => {
        const logoPresent = driver.findElement(By.className('lnXdpd')) != 0;
        expect(logoPresent).toBeTruthy();
    });

    test('search_row', () => {
        const searchRowPresent = driver.findElement(By.name('q')) != 0;
        expect(searchRowPresent).toBeTruthy();
    });

    test('search_btn', () => {
        const searchBtnPresent = driver.findElement(By.className('QCzoEc z1asCe MZy1Rb')) != 0;
        expect(searchBtnPresent).toBeTruthy();
    });

    test('link_gmail', async () => {
        const linkGmailPresent = driver.findElement(By.linkText('Gmail')) != 0;
        expect(linkGmailPresent).toBeTruthy();
    });

    afterAll(() => driver.close());
});
