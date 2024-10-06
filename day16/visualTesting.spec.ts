import test, { expect } from '@playwright/test'
test("visual testing",async({page})=>{

    await page.goto("https://www.testleaf.com/")
   const screneshot= await page.screenshot();   
   expect(screneshot).toMatchSnapshot("testleaf.png")
})