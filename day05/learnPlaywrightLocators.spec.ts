import test from "@playwright/test"



test(`Playwright Locator`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")   
    
    await page.getByLabel("Username").fill("demoSalesManager")
    await page.getByLabel("Password").fill("crmsfa")    
})



test.only(`Playwright Locator with Salesforce`,async({page})=>{

    await page.goto("https://login.salesforce.com/")   
   await page.locator("#username").fill("vidyar@testleaf.com")
   await page.locator("#password").fill("Sales@123")
    await page.locator("#Login").click()
    await page.getByTitle("App Launcher").click({timeout:12000})   
    await page.getByText("View All").click()
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.getByRole("link",{name:"Service",exact:true}).click();
    //await page.getByRole("link").filter({hasText:"Service"}).click();
    //await page.getByRole("link").filter({has:page.locator("text=Service")}).click()
})

