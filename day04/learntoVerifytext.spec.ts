import test, { chromium } from "@playwright/test";

test('Learn Basic Locators', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://leaftaps.com/opentaps/control/main")
  await page.locator("[id=username]").fill("demosalesManager")
  await page.locator("#password").fill("crmsfa")
  await page.locator(".decorativeSubmit").click()
  //click the linktext
  const crm= page.locator("text=CRM/SFA");
  console.log(await crm.innerText());
  await page.waitForTimeout(3000)


})