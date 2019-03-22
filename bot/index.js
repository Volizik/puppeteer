const puppeteer = require('puppeteer');
// const { sites } = require('../db');
const sites = require('./middlewares/sites');

let browser;
const browserOptions = {
    headless: false,
    ignoreHTTPSErrors: true,
    args: [
        "--proxy-server=socks4://94.190.128.22:4145",
        "--no-sandbox",
        "--disable-setuid-sandbox"
    ]
};

module.exports.run = async () => {
  const urlsList = await sites.getURLs();
  browser = await puppeteer.launch(browserOptions);
  for (let i = 0; i < urlsList.length; i++) {
    console.log('Загружаем ', urlsList[i].url);
    await newPage(browser, urlsList[i].url);
    console.log('Закрываем ', urlsList[i].url);
  }
  stop();
};

module.exports.stop = async () => {
  await browser.close();
};

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            let totalHeight = 0;
            const distance = 20;
            const docHeight = document.body.scrollHeight;
            const timer = setInterval(() => {
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= docHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 200);
        });
    });
}

async function newPage(browser, url) {
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    await page.setViewport({
        width: 1200,
        height: 800
    });
    await autoScroll(page);
    await page.close();
}
