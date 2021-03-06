const { browserStackErrorReporter } = requireHelper('browserstack-error-reporter');
const utils = requireHelper('e2e-utils');
const config = requireHelper('e2e-config');

jasmine.getEnv().addReporter(browserStackErrorReporter);

describe('Message tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/message/example-index');
  });

  it('Should not have errors', async () => {
    await utils.checkForErrors();
  });

  if (!utils.isBS()) {
    it('Should not be able to tab out of message modal', async () => {
      const buttonEl = await element(by.id('show-delete-confirmation'));
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(buttonEl), config.waitsFor);

      await buttonEl.click();

      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.css('.btn-modal-primary'))), config.waitsFor);

      const modalButtonPrimaryEl = await element(by.css('.btn-modal-primary'));

      await modalButtonPrimaryEl.sendKeys(protractor.Key.TAB);
      const modalButtonPrimaryClasses = await modalButtonPrimaryEl.getAttribute('class');

      expect(modalButtonPrimaryClasses).toContain('btn-modal-primary');
      expect(modalButtonPrimaryClasses).toContain('hide-focus');

      const modalButtonEl = await element.all(by.css('.btn-modal')).first();

      await modalButtonEl.sendKeys(protractor.Key.TAB);
      const modalButtonClasses = await modalButtonEl.getAttribute('class');

      expect(modalButtonClasses).toContain('btn-modal');
      expect(modalButtonClasses).toContain('hide-focus');
    });
  }

  it('Should be able to set id/automation/id on buttons', async () => {
    const btnEl = await element(by.id('show-application-alert'));
    await btnEl.click();
    await browser.driver.sleep(config.sleepShort);

    expect(await element(by.id('message-acknowledge-cancel-1')).getAttribute('id')).toEqual('message-acknowledge-cancel-1');
    expect(await element(by.css('[data-automation-id="message-alert-cancel-1"]')).getAttribute('data-automation-id')).toEqual('message-alert-cancel-1');
    expect(await element(by.id('message-acknowledge-modal')).getAttribute('id')).toEqual('message-acknowledge-modal');
    expect(await element(by.id('message-acknowledge-modal')).getAttribute('data-automation-id')).toEqual('message-acknowledge-auto-modal');
  });

  it('Should be able to set id/automation/id on root/items', async () => {
    const btnEl = await element(by.id('show-application-alert'));
    await btnEl.click();
    await browser.driver.sleep(config.sleepShort);

    expect(await element(by.id('message-acknowledge-title')).getAttribute('id')).toEqual('message-acknowledge-title');
    expect(await element(by.id('message-acknowledge-message')).getAttribute('id')).toEqual('message-acknowledge-message');
  });
});

describe('Message xss tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/message/test-escaped-title');
  });

  it('Should not have errors', async () => {
    await utils.checkForErrors();
  });

  it('Should show encoded text in the title', async () => {
    const buttonEl = await element(by.id('show-message'));
    await browser.driver
      .wait(protractor.ExpectedConditions.visibilityOf(buttonEl), config.waitsFor);
    await buttonEl.click();

    await browser.driver
      .wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.message.modal'))), config.waitsFor);

    expect(await element(by.css('.message.modal .modal-title')).getText()).toEqual('<script>alert("menuXSS")</script>');
  });
});

describe('Message overlay opacity tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/message/test-overlay-opacity');
  });

  it('Should not have errors', async () => {
    await utils.checkForErrors();
  });

  it('Should be able to set overlay opacity to 10%', async () => {
    const overlayEl = await element(by.css('.overlay'));
    const btnEl = await element(by.id('opacity-10'));
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(btnEl), config.waitsFor);
    await btnEl.click();
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(element(by.className('overlay'))), config.waitsFor);
    await browser.driver.sleep(config.sleep);

    expect(await overlayEl.getCssValue('opacity')).toBe('0.1');
  });
});

describe('Message visual regression tests', () => {
  if (utils.isChrome() && utils.isCI()) {
    it('Should not visual regress on lists example?theme=classic&layout=nofrills', async () => {
      await utils.setPage('/components/message/test-lists.html');
      await browser.driver.sleep(config.sleep);
      const container = await element(by.id('maincontent'));
      await element(by.id('show-message')).click();
      await browser.driver.sleep(config.sleepLonger);

      expect(await browser.imageComparison.checkElement(container, 'message-open-list')).toEqual(0);
    });

    it('Should not visual regress on error example', async () => {
      await utils.setPage('/components/message/example-index.html?theme=classic');
      await browser.driver.sleep(config.sleep);
      const container = await element(by.id('maincontent'));
      await element(by.id('show-application-error')).click();
      await browser.driver.sleep(config.sleepLonger);

      expect(await browser.imageComparison.checkElement(container, 'message-open')).toEqual(0);
    });
  }
});
