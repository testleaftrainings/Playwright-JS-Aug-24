import test, { chromium } from "@playwright/test";
test("Handling Dropdown", async () => {


   const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.leafground.com/select.xhtml");

    // Select the first option by index
    await page.selectOption(".ui-selectonemenu", { index: 1 });

    await page.waitForTimeout(2000);

    // Select the option labeled "Puppeteer"
    await page.selectOption(".ui-selectonemenu", { label: "Puppeteer" });

    // Locate all options under the specified dropdown using XPath
    const ddEle = page.locator("//select[@class='ui-selectonemenu']/option");
    // Count the number of options in the dropdown
    const countOpt = await ddEle.count();
    console.log(countOpt);

    // Get all the inner texts of the options
    const text = await ddEle.allInnerTexts();
    console.log("Dropdown options:", text);

    //Random Text based Selection
 for (let index = 1; index < countOpt; index++) {
    const Textvalue=await ddEle.nth(index).innerText();
   //  await ddEle.nth(index).click()     -not working
    await page.selectOption(".ui-selectonemenu", {value: `${Textvalue}` })  
 }
// }
//    //Random Index based Selection
//    for (let index = 1; index < countOpt; index++) {
//        await page.selectOption(".ui-selectonemenu", {index:index})  
//      }
//     })

   })