import { test } from '@playwright/test'

test(`Login Funtionality of SalesForce with trycatch block`,async({page},testInfo)=>{

  test.step(`LoginFun`,async()=>{
  testInfo.annotations.push({
    type:"Regression",description:"Verifying Salesforce"
  })
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.fill("#username","vidyar@testleaf.com")
    console.log(testInfo.title)
    // try{
    //   await page.fill("#usernam","vidyar@testleaf.com")
    // }catch{
    //   await page.fill("#username","vidyar@testleaf.com")
    // }
    await page.locator("#password").fill("Sales@123")
    await page.delayedCick("#Login")
})

})