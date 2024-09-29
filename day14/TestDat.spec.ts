import {test} from '@playwright/test'
import { RandomDataGeneration } from './randomData'

test(`Using static method`,async({page})=>{
    console.log(RandomDataGeneration.getFirstname())
    console.log(RandomDataGeneration.getcompanyName())
    const table=await page.locator("").all()
    await page.getByLabel("table").all()
})