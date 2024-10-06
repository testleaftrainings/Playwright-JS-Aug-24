import test ,{chromium} from "@playwright/test";


test.only("Learning geoLocation",async()=>{

  const browser=await chromium.launch({headless:false})
  const context=await browser.newContext({
    geolocation:{
      'latitude':46.2276,
      'longitude':2.2137
    },
    permissions:['geolocation']
  })
const page=await context.newPage()
await page.goto("https://www.google.com/maps")
await page.waitForLoadState('domcontentloaded')
await page.click("#sVuEFc") 
await page.waitForTimeout(4000)
})



test.use({geolocation:{
  'latitude':39.0742,
  'longitude':21.8243
},
permissions:['geolocation']})
test("Learning geoLocation using test.use",async({page})=>{
await page.goto("https://www.google.com/maps")
await page.waitForLoadState('domcontentloaded')
await page.click("#sVuEFc") 
await page.waitForTimeout(4000)
})
