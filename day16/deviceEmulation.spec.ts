import test, { chromium, devices } from "@playwright/test"

test("Learning device Emulation", async () => {

    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext({
        ...devices['Blackberry PlayBook landscape']
    })
    const page = await context.newPage()
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", "vidyar@testleaf.com")
    await page.fill("#password", "Sales@123")
    await page.click("#Login")
})

test.use({ ...devices['Galaxy Note 3'] })
test("Learning deviceEmulation Using test.use", async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", "vidyar@testleaf.com")
    await page.fill("#password", "Sales@123")
    await page.click("#Login")
})