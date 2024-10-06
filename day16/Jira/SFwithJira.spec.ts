import test from "@playwright/test";
import { createIssue } from "./JiraIntegration";
import { logDefect } from "./logDefectwithStatus";


test("Learning jira integration",async({page},testInfo)=>{
testInfo.annotations.push({
    "type":"Bug","description":""
})
await page.goto("https://login.salesforce.com/")
await page.fill("#username","vidyar@testleaf.com")
await page.fill("#password","Sales@123")
await page.click("#Logi")
//createIssue("Creating issue with spec file","Learning to createissue for test  status")
// logDefect(testInfo)
})


test.afterEach(async({},testInfo)=>{
  const key=await logDefect(testInfo)
  //PWAUG-1
  //PWAUG-2
  //PWAUG-3
  console.log(testInfo.status)
  console.log(key)
})

test.afterAll(async()=>{
    //update Jira with attachments
})