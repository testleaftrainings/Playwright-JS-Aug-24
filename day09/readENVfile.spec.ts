import test from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path';
//dotenv.config()

dotenv.config({ path: path.resolve(__dirname, `../../data/.env`) })


test(`Read data from values from .env files`,async({page})=>{

    const url=process.env.LT_BASEURL as string
    const username=process.env.LT_USERNAME as string
    const password=process.env.LT_PASSWORD as string

    await page.goto(url)
    await page.fill("#username",username)
    await page.waitForTimeout(3000)
    await page.fill("#password",password)
    await page.click(".decorativeSubmit")    
})



test(`Read data from ENV file`,async({page})=>{

const environment=process.env.NODE_ENV || 'qa'
dotenv.config({ path: path.resolve(__dirname, `../../data/${environment}.env`) });//set the path of the file

    const url=process.env.LT_BASEURL as string
    const username=process.env.LT_USERNAME as string
    const password=process.env.LT_PASSWORD as string

    await page.goto(url)
    await page.fill("#username",username)
    await page.waitForTimeout(3000)
    await page.fill("#password",password)
    await page.click(".decorativeSubmit")    
})