import test from "playwright/test";


test.use({storageState:'creds/sf.json'})
test(`Skip the Login page`,async({page})=>{
        await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")    
        console.log(await page.title())
    })