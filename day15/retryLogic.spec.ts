import {test as baseTest} from '@playwright/test'

export const test=baseTest.extend<{page:any}>({
    page:async({page},use,testInfo)=>{
       
        page.delayedFill=async(selector:string,data:string)=>{
            if(testInfo.retry){
                await page.waitForTimeout(3000)
            }
            await page.fill(selector,data)
        }
        page.delayedClick=async(selector:string)=>
        {
            await page.click(selector,{timeout:2000})
            if(testInfo.retry==1){
                console.log("retrying")
                await page.waitForTimeout(3000)
            }
        }
        use(page)

    }
   

    
})

//page:Page