import test, { chromium } from "@playwright/test";

test("Get the Count of Options", async () => {
    const browser = await chromium.launch({ headless: false });
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemosalesManager");
    await page.fill("#password", "crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("text=CRM/SFA").click();
    // await page.locator(`a[text="Leads"]`).click()
    // await page.click(`a[text="Create Lead"]`);     

    await page.getByRole('link', { name: 'Leads',exact:true}).click()
    await page.getByRole('link', { name: "Create Lead" }).click()
    await page.fill("#createLeadForm_companyName", "Testleaf")
    await page.fill("#createLeadForm_firstName", "Vidya")
    await page.fill("#createLeadForm_lastName", "R")

    //dropdown
    await page.selectOption("#createLeadForm_dataSourceId", { value: "LEAD_EMPLOYEE" })

    //located the element
    const dropdown = page.locator("#createLeadForm_dataSourceId>option");
    const dropdownCount = await dropdown.count();
    console.log(`No. of values: ${dropdownCount}`);
    for (let index = 1; index < dropdownCount; index++) {
    console.log(await dropdown.nth(index).innerText());
    if(index%2==0){
    await page.selectOption("#createLeadForm_dataSourceId", {index:index })      
    }}
    
})

