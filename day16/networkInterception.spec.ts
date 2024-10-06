import test from '@playwright/test'
test(`Network interception`,async({page})=>{//route -->to act on the endpoint
   await page.route("**/*.{png,jpg,jpeg}",route=>route.abort())
   await page.goto("https://www.testleaf.com/")
   await page.waitForTimeout(4000)
})


test.only("SalesForce ", async ({ page }) => {  

    await page.route("/aura?preloadActions",async (route,request)=>{
        if(request.method()=="POST"){
            console.log("Request url" +request.url())
            console.log(request.headers())
    const allheaders=await request.allHeaders()
    console.log(allheaders)
    //delete Headers['']

 route.continue({
    headers:{
        Date:''
    }
 })        }

    })


    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", "vidyar@testleaf.com")
    await page.fill("#password", "Sales@123")
    await page.click("#Login")
    await page.click(".slds-icon-waffle")
})



test(`Network interceptionm for headers`,async({page})=>{//route -->to act on the endpoint
    await page.route("**/*.{png,jpg,jpeg}",async (route,request)=>{
        if(request.method()=="POST"){
            console.log("Request url" +request.url())
            console.log(request.headers())
    const allheaders=await request.allHeaders()
        }
   })
    await page.goto("https://www.testleaf.com/")
    await page.waitForTimeout(4000)
 })