import {test,expect} from "@playwright/test"


test(`Learn Auto-wait`,async({page})=>{

    await page.goto("https://www.leafground.com/waits.xhtml") 

//Locator Chaining ->using filter-->complex dom
//{hasText:"Wait for Visibility (1 - 10 Sec)"})
const waitforVisibility= page.locator(".card").filter({has:page.getByText("Wait for Visibility (1 - 10 Sec)")})
await waitforVisibility.getByText("Click").click()
let text=  await waitforVisibility.locator("//span[text()='I am here']").innerText()
expect(text).toContain("I am here");
await page.waitForLoadState('domcontentloaded')
})