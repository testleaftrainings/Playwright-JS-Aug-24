import { test } from "@playwright/test";

test(`Test to handle dialogs`, async ({page}) => {
    await page.goto("https://leafground.com/alert.xhtml");
    //Simple Dialog
    await page.locator("text=Show").first().click();

    //Confirm Dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"})
    .locator("//span[text()='Show']").click();

    //Prompt Dialog
    await page.locator(".card").filter({hasText:"(Prompt Dialog)"})
    .locator("button").filter({hasText:"Show"}).click();   

})

test.only(`Test to handle dialogs using event listeners`, async ({page}) => {

    page.on('dialog', async dialog => {
        const alertMessage = dialog.message(); 
        console.log(`The message says ${alertMessage}`);
        const alertType = dialog.type();
        console.log(`The type of the alert is ${alertType}`);
        if(alertType === 'confirm'){
            await dialog.accept();
        } else {
            await dialog.dismiss();
        }
       // await dialog.accept("Testleaf");
    })
    await page.goto("https://leafground.com/alert.xhtml");
    //Simple Dialog
    await page.locator("text=Show").first().click();
    await page.waitForTimeout(2000);
    //Confirm Dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"})
    .locator("//span[text()='Show']").click();
    await page.waitForTimeout(2000);

    //Prompt Dialog
    await page.locator(".card").filter({hasText:"(Prompt Dialog)"})
    .locator("button").filter({hasText:"Show"}).click();   
    await page.waitForTimeout(2000);

})

test.only(`Test to handle specific dialogs using event listeners`, async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");
    //Simple Dialog
    await page.locator("text=Show").first().click();
    await page.waitForTimeout(2000);
    //Confirm Dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"})
    .locator("//span[text()='Show']").click();
    await page.waitForTimeout(2000);

    page.once('dialog', async dialog => {
        const alertMessage = dialog.message(); 
        console.log(`The message says ${alertMessage}`);
        const alertType = dialog.type();
        console.log(`The type of the alert is ${alertType}`);
       await dialog.accept("Testleaf");
    })
    //Prompt Dialog
    await page.locator(".card").filter({hasText:"(Prompt Dialog)"})
    .locator("button").filter({hasText:"Show"}).click();   
    await page.waitForTimeout(2000);

})
