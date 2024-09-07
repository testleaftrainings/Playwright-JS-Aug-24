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
})

