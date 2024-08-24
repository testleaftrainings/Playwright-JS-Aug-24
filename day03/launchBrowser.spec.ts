import {chromium, firefox, test, webkit} from '@playwright/test'

test("Launch Browser in chromium",async()=>{
    //connection to chromium->chrome/edge
      const browser= await chromium.launch()
      //to open a window
      const browserContext= await browser.newContext()    
     // to open a page /tab
      const page =await browserContext.newPage()
      await page.goto("http://www.google.com")        
      console.log(page.url())
      console.log(await page.title())
      Promise<String>
      await page.close();
})


