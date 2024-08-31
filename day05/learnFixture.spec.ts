import test from "@playwright/test";


test(`LearnFixtures with Context`,async({context})=>{
    const page=await context.newPage();
    await page.goto("http://www.google.com")     
})

test(`LearnFixtures with Page`,async({page})=>{

    await page.goto("http://www.amazon.in")     
    
})