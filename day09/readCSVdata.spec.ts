import path from "path";
import fs from 'fs'
import test from "playwright/test";
import { parse } from "csv-parse/sync";

const userData=parse(fs.readFileSync(path.join(__dirname,"../../data/loginData.csv"),'utf-8'),{
  columns:true, // to make the first row as header
  skip_records_with_empty_values:true
})

userData.forEach(element => {
    test(`Read data from csv file using fs ${element.TestcaseId}`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username",element.Username)
        await page.fill("#password",element.password)
        await page.click(".decorativeSubmit")    
    })
    }); 