import {test,chromium} from "playwright/test";

test.fixme(`Learn test annotations for fixme `,async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")   
})


test.skip(`Learn test annotations for skip `,async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")       
})

test(`Learn test annotations for slow `,async({page})=>{
    test.slow();// response is slow /network issue 
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")    
    await page.click(".slds-icon-waffle")
   
})