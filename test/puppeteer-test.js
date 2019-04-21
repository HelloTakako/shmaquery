const puppeteer = require('puppeteer');

describe('puppeteer', () => {
  it('should run client side test successfully', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://192.168.12.102:8081/test/');
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    await browser.close();

    const regex = /AssertionError/g;
    var found = bodyHTML.match(regex);
    expect(found).to.equal(null);
  });
});
