
import {expect, test} from '@playwright/test'

test (`Learn Assertions`,async({page})=>{

    await page.goto("https://login.salesforce.com/")   
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
    await page.locator("#Login").click()
    const title=await page.title();
    //to write assertion ->library expect  -->5000ms
    await expect(page).toHaveTitle("Home | Salesforce")  //retrying assertion

    
 //   expect(title).toContain("Home | Salesforce")   //Non -retryin

})



test .only(`Learn Assertions with retry and Non-retry`,async({page})=>{

    await page.goto("https://www.leafground.com/input.xhtml")  
    const fillName= page.getByPlaceholder("Babu Manickam") ;
    await expect(fillName).toBeDisabled() //retrying assertion


})

