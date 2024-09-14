import test from "playwright/test";
import credentials from '../../data/login.json'
import fs from 'fs'
import path from "path";

for(const user of credentials){
    test(`Read data from JSON file ${user.testcaseId}`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username",user.username)
        await page.fill("#password",user.password)
        await page.click(".decorativeSubmit")    
    })
}

//const loginData=fs.readFileSync(path.resolve("../../data/login.json"),'utf-8')
//path.join("folder","subfolder","filename")
//console.log(loginData)
//convert json -->object -->array
//const userCredentials=JSON.parse(loginData)

const userData=JSON.parse(fs.readFileSync(path.join(__dirname,"../../data/login.json"),'utf-8'))

userData.forEach(element => {
    test(`Read data from JSON file using fs ${element.testcaseId}`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username",element.username)
        await page.fill("#password",element.password)
        await page.click(".decorativeSubmit")    
    })
    });   

const oneData=JSON.parse(fs.readFileSync(path.join(__dirname,"../../data/singleData.json"),'utf-8'))

test(`Read data from JSON file using fs with individual data ${oneData.testcaseId}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",oneData.username)
    await page.fill("#password",oneData.password)
    await page.click(".decorativeSubmit")    
})
