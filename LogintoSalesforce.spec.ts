import {chromium,test} from "@playwright/test";
test (`Salesforce login`, async () => {
    const browser=await chromium.launch ({headless: false});
    const browsercontext=await browser.newContext();
    const page=await browsercontext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.locator("#Username").fill("balakrishna@gmail.com");
    await page.locator("#password").fill("balakrishna@123");
    await page.waitForTimeout(6000);
    await page.locator("#login").click();
    await page.waitForTimeout(6000);
    console.log(`get the title: ${page.title()}`)
    console.log(`page url is ${page.url()}`);
    await page.close();
    await browsercontext.close();
    await browser.close();
    
})
