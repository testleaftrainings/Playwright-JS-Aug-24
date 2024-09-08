import { test } from "@playwright/test";

test(`Test to interact with the frames`, async ({page}) => {

    await page.goto("https://www.oneindia.com/");
    //To get the frames
    const allFrames = page.frames();
    console.log(allFrames);
    
    //To get the count of the frames
    const frameCount = page.frames().length;
    console.log(`The total no. of frames is ${frameCount}`);

    for(let iframe of allFrames){
        const title = await iframe.title();
        console.log(`The title of the frame is ${title}`);   
    }
    //handling frame with frame index --> from array<frame>
   const firstFrameEle=allFrames[1];
   await firstFrameEle.locator("").click()
})


test.only("Handling frame using frame Object", async({page})=>{

        await page.goto("https://www.leafground.com/frame.xhtml")
        //using frame url
       const frameElement= page.frame({url:"https://www.leafground.com/default.xhtml"});
       const eleinFrame= frameElement?.locator("#Click")  //locating the ele
       console.log(await eleinFrame?.innerText())
       await eleinFrame?.click();
       console.log(await eleinFrame?.innerText())      

      //  await page.click("#Click") throws timeout error

        //condition check 
        //if frame is present is present -->does the following action
        //if not -->return null

})
test("Handling frame using frame Locator", async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")
    //using frame Locator
   // await  page.frameLocator("//iframe").nth(2)

//   const outerFrame= page.locator(".card").filter({hasText:" Click Me (Inside Nested frame)"})
//       .frameLocator("//iframe")
//   const innerFrame=outerFrame.frameLocator("#frame2")
//   await innerFrame.locator("#Click").click()
const allFrames = page.frames();
const nestedFrameEle=allFrames[3];
await nestedFrameEle.frameLocator("#frame2").locator("#Click").click()

})
