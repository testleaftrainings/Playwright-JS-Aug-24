import test from '@playwright/test'
//group :1 --> to run in parallel
test.describe.skip(`Grouping salesforce and Leaftaps application`,async()=>{
    test.describe.configure({mode:"parallel",retries:1})
test(`Learn test annotations for grouping `,async({page})=>{   
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")    
    await page.click(".slds-icon-waffle")   
})
test(`Learn test annotations using describe `,async({page})=>{   
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")    
     })


})

//group :2 -->dependency and also retry
test.describe(`Grouping for Regression`,async()=>{
   test.describe.configure({mode:"serial",retries:1})
    test(`Learn test annotations for grouping using configure `,async({page})=>{   
        await page.goto("https://login.salesforce.com/")
        await page.fill("#usernam","vidyar@testleaf.com")
        await page.fill("#password","Sales@123")
        await page.click("#Login")    
        await page.click(".slds-icon-waffle")   
    })
    test(`Learn test annotations using describe for reg `,async({page})=>{   
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username","demoSalesManager")
        await page.fill("#password","crmsfa")
        await page.click(".decorativeSubmit")    
         
    })
    
    })