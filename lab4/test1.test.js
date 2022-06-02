
const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');

async function goToAutomationpracticeSite(driver) {
  await driver.get('https://automationpractice.com');
}

async function signOutOnAutomationpracticeSite(driver) {
  await goToAutomationpracticeSite(driver);
  {
    let signOutBtn;
    try {
      signOutBtn = await driver.findElement(By.linkText('Sign out'));
    } catch (error) {
      console.log('Already sign out');
      return;
    }
    if (signOutBtn) {
      await driver.actions({ async: true }).click(signOutBtn).perform();
    }
  }
}

describe('authorization', () => {
  let driver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });
  beforeEach(async () => {
    signOutOnAutomationpracticeSite(driver);
  })
  // /*
  test('possitive_authorization', async () => {
    const email = '19fi.m.ighnatov@std.npu.edu.ua';
    const passwd = 'automationLab';

    // go to login page
    await goToAutomationpracticeSite(driver);
    {
      await driver.wait(until.elementLocated(By.linkText('Sign in')));
      const signInBtn = await driver.findElement(By.linkText('Sign in'));
      await driver.actions({ async: true }).click(signInBtn).perform();
    }

    // check title login page
    {
      await driver.wait(until.titleIs('Login - My Store'))
      const title = await driver.getTitle();
      expect(title).toStrictEqual('Login - My Store');
    }

    // enter email and password
    {
      await driver.wait(until.elementsLocated(By.id('email'), By.id('passwd')));
      const emailField = await driver.findElement(By.id('email'));
      await emailField.sendKeys(email);
      const passwdField = await driver.findElement(By.id('passwd'));
      await passwdField.sendKeys(passwd);
      const signInBtn = await driver.findElement(By.id('SubmitLogin'));
      await driver.actions({ async: true }).click(signInBtn).perform();
    }

    // check redirect to user home page
    {
      await driver.wait(until.titleIs('My account - My Store'))
      const title = await driver.getTitle();
      expect(title).toStrictEqual('My account - My Store');
    }

    // check name of user on a home page
    {
      await driver.wait(until.elementLocated(By.className('header_user_info')));
      const menuName = await driver.findElement(By.className('header_user_info')).then(span => span.getText());
      expect(menuName).toStrictEqual('FName LName');
    }
  });

  test('authorization_with_empty_email', async () => {
    const passwd = 'automationLab';

    // go to login page
    await goToAutomationpracticeSite(driver);
    {
      await driver.wait(until.elementLocated(By.linkText('Sign in')));
      const signInBtn = await driver.findElement(By.linkText('Sign in'));
      await driver.actions({ async: true }).click(signInBtn).perform();
    }

    // check title login page
    {
      await driver.wait(until.titleIs('Login - My Store'))
      const title = await driver.getTitle();
      expect(title).toStrictEqual('Login - My Store');
    }

    // enter password
    {
      await driver.wait(until.elementsLocated(By.id('passwd')));
      const passwdField = await driver.findElement(By.id('passwd'));
      await passwdField.sendKeys(passwd);
      const signInBtn = await driver.findElement(By.id('SubmitLogin'));
      await driver.actions({ async: true }).click(signInBtn).perform();
    }

    // check present alert on empty email field
    {
      await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[2]/div/div[3]/div/div[1]/ol/li')));
      const alertText = await driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/div[1]/ol/li')).then(span => span.getText());
      expect(alertText).toStrictEqual('An email address required.');
    }
  });

  test('authorization_with_empty_passwd', async () => {
    const email = '19fi.m.ighnatov@std.npu.edu.ua';

    // go to login page
    await goToAutomationpracticeSite(driver);
    {
      await driver.wait(until.elementLocated(By.linkText('Sign in')));
      const signInBtn = await driver.findElement(By.linkText('Sign in'));
      await driver.actions({ async: true }).click(signInBtn).perform();
    }

    // check title login page
    {
      await driver.wait(until.titleIs('Login - My Store'))
      const title = await driver.getTitle();
      expect(title).toStrictEqual('Login - My Store');
    }

    // enter email
    {
      await driver.wait(until.elementsLocated(By.id('email')));
      const emailField = await driver.findElement(By.id('email'));
      await emailField.sendKeys(email);
      const signInBtn = await driver.findElement(By.id('SubmitLogin'));
      await driver.actions({ async: true }).click(signInBtn).perform();
    }

    // check present alert on empty password field
    {
      await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[2]/div/div[3]/div/div[1]/ol/li')));
      const alertText = await driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/div[1]/ol/li')).then(span => span.getText());
      expect(alertText).toStrictEqual('Password is required.');
    }
  });

  afterAll(() => driver.close());
});
