import { basename } from "./customFixture.spec"



basename.use({storageState:"loginCredentials.json"})
basename(`Learning to use custom fixture`,async({loginFixture})=>{
    await loginFixture.locator('text=CRM/SFA').click()
   console.log(await loginFixture.title())
})