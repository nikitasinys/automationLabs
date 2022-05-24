const { Builder, By, Key, until } = require('selenium-webdriver');

async function goToWikiKyivPage(driver) {
	await driver.get('https://uk.wikipedia.org/wiki');
	await driver.findElement(By.id("searchInput")).sendKeys("Київ", Key.RETURN);
	await driver.get('https://uk.wikipedia.org/wiki/Київ');

	// const acceptCookieBtn = await driver.findElement(By.id('L2AGLb'))
	// const acceptCookieBtn = await driver.findElement(By.xpath("//button[@id='L2AGLb']"))
	// const actions = driver.actions({ async: true });
	// await actions.click(acceptCookieBtn).perform();
}

describe('wiki_test', () => {
	let driver;
	jest.setTimeout(50000);
	beforeAll(async () => {
		driver = await new Builder().forBrowser('firefox').build();
		await goToWikiKyivPage(driver);
	});

	test('gerb', () => {
		const gerbPresent = driver.findElement(By.className('image')) != 0;
		expect(gerbPresent).toBeTruthy();
	});

	test('peopleCountTagPresent', () => {
		const peopleCountTagPresent = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[7]/tbody/tr[35]/td[1]")) != 0;
		expect(peopleCountTagPresent).toBeTruthy();
	});

	test('avgTemperaturePresent', () => {
		const avgTemperaturePresent = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[2]/tbody/tr[5]")) != 0;
		expect(avgTemperaturePresent).toBeTruthy();
	});

	test('aprilMaxTemperatureTagPresent', () => {
		const aprilMaxTemperatureTagPresent = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[2]/tbody/tr[3]/th[5]")) != 0;
		expect(aprilMaxTemperatureTagPresent).toBeTruthy();
	});

	test('aprilLowTemperatureTagPresent', () => {
		const aprilLowTemperatureTagPresent = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[2]/tbody/tr[7]/th[5]")) != 0;
		expect(aprilLowTemperatureTagPresent).toBeTruthy();
	});

	test('pandemiaTagPresent', () => {
		const pandemiaTagPresent = driver.findElement(By.className("toclevel-2 tocsection-18")) != 0;
		expect(pandemiaTagPresent).toBeTruthy();
	});

	test('populationDensityTagPresent', () => {
		const populationDensityTagPresent = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[1]/tbody/tr[18]/td")) != 0;
		expect(populationDensityTagPresent).toBeTruthy();
	});

	test('countOfMonumentsTagPresent', () => {
		const countOfMonumentsTagPresent = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/ul[11]")) != 0;
		expect(countOfMonumentsTagPresent).toBeTruthy();
	});

	afterAll(() => driver.close());
});
