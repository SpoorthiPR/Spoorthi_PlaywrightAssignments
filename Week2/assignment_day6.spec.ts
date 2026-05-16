import { test } from '@playwright/test';


test('Launch browsers', async ({ page }, testInfo) => {

    console.log('Current Project:', testInfo.project.name);

    // Microsoft Edge
    if (testInfo.project.name === 'Microsoft Edge') 
        {
            headless: false
            await page.goto('https://www.redbus.in', {
                waitUntil: 'domcontentloaded'
            });

        console.log('RedBus Title:', await page.title());
        console.log('RedBus URL:', page.url());

        await page.waitForTimeout(5000);
    }

    // Firefox
    else if (testInfo.project.name === 'firefox') 
        {
            headless: false
            await page.goto('https://www.flipkart.com');

        console.log('Flipkart Title:', await page.title());
        console.log('Flipkart URL:', page.url());

        await page.waitForTimeout(5000);
    }

});