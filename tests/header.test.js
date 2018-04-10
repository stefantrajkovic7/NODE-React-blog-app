const puppeteer = require('puppeteer');

test('We can lunch a browser', async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000');
});