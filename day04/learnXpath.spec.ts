import test, { chromium } from "@playwright/test";

test('Learn Basic Locators', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://leaftaps.com/opentaps/control/main")
  const textField = page.locator(".inputLogin")
  await textField.first().fill("demosalesManager")
  await textField.nth(1).fill("demosalesManager")
  //enter the data into the password field
  //await page.locator("#password").fill("crmsfa") //click on the login button
  //await page.locator(".decorativeSubmit").click()
  await page.locator(".decorativeSubmit").click()
  await page.waitForTimeout(3000)
})