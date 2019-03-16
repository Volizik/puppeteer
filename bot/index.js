const puppeteer = require('puppeteer');
const { sites } = require('../db');

const browserOptions = {
    headless: false,
    ignoreHTTPSErrors: true,
    args: [
        "--proxy-server=socks4://94.190.128.22:4145",
        "--no-sandbox",
        "--disable-setuid-sandbox"
    ]
};

(async () => {
    await getProxy();
    console.log(sites)
    const browser = await puppeteer.launch(browserOptions);
    for (let i = 0; i < sites.length; i++) {
        console.log('Загружаем ', sites[i].url);
        await newPage(browser, sites[i].url, `site_${i}`);
        console.log('Закрываем ', sites[i].url);
    }

    await browser.close();
})();

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

async function getProxy() {}

async function newPage(browser, url, photoSiteName) {
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    await page.setViewport({
        width: 1200,
        height: 800
    });

    await autoScroll(page);

    await page.screenshot({
        path: `./bot/site_photos/${photoSiteName}.png`,
        fullPage: true
    });

    await page.close();
}
