import { test } from "./retryLogic.spec"

test(`Login Funtionality of SalesForce`,async({page})=>{
  test
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.delayedFill("#username","vidyar@testleaf.com")   
    await page.locator("#password").fill("Sales@123")
    await page.delayedClick("#Logi")
})