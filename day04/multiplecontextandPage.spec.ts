import test, { chromium } from "@playwright/test";

test.skip('Launching application in same Context and multiple page', async () => {

    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("http://www.google.com")


    //to open the application in new tab with the same window reference

    const page2 = await context1.newPage();
    await page2.goto("http://www.amazon.in")


    //to pause the execution for few seconds
    await page2.waitForTimeout(3000)

})
test('Launching application in different Context and multiple page', async () => {

    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("http://www.google.com")

    //to open the application in new tab with the same window reference

    const page2 = await context1.newPage();
    await page2.goto("http://www.amazon.in")

    const context2 = await browser.newContext()
    const page3 = await context2.newPage()
    await page3.goto("http://www.leaftaps.com/opentaps")

    //to pause the execution for few seconds
    await page3.waitForTimeout(3000)

})

//10 test -->test.only