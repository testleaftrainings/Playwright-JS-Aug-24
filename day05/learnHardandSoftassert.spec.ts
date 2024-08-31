
import {expect, test} from '@playwright/test'

test.only(`Learn and soft Hard Assertions`,async({page})=>{

    await page.goto("https://login.salesforce.com/")   
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
    await page.locator("#Login").click()
    const title=await page.title();   
   // await expect(page).toHaveTitle("Home | Salesforce")  //retrying assertion
   await expect.soft(page).toHaveTitle("Home | Salesforce")  //retrying assertion

   await page.getByTitle("App Launcher").click({timeout:12000})     
    
 //   expect(title).toContain("Home | Salesforce")   //Non -retryin

})



test(`Learn Assertions with retry and Non-retry`,async({page})=>{

    await page.goto("https://www.leafground.com/input.xhtml")  
    const fillName= page.getByPlaceholder("Babu Manickam") ;
    await expect(fillName).toBeDisabled() //retrying assertion


})

