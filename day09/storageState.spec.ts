import {test,chromium} from "playwright/test";

test(`Learn to use storage state `,async({page})=>{
//  const browser=await chromium.launch({headless:false,channel:'msedge'})
//  const context=await browser.newContext()
//  const page=await context.newPage()
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")    
    await page.context().storageState({path:"creds/sf.json"})
})