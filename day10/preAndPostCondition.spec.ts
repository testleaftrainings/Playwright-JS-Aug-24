import test from "playwright/test"


test.beforeAll(`Before all the test `,async()=>{   
   console.log("Before of all test to be executed")
})

test.beforeEach(`Before Each test`,async({page})=>{   
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")      
   
})

test("Create Lead",async({page})=>{
  await page.click("text=CRM/SFA")
  await page.getByRole("link",{name:"Leads",exact:true}).click()
  await page.getByRole("link",{name:"Create Lead",exact:true}).click()
})


test("Create Account",async({page})=>{   
  await page.click("text=CRM/SFA")
    await page.getByRole("link",{name:"Accounts",exact:true}).click()
    await page.getByRole("link",{name:"Create Account",exact:true}).click()
  })

test.afterEach(`AfterEach test `,async()=>{

    console.log("Creating jira issue")
})


test.afterAll(`After all test `,async()=>{

    console.log("upadating jira issue with attachments")
})