import test from "@playwright/test";


test("Handling multiple tabs", async ({ page, context }) => {

    const page_one = await context.newPage()
    const page_two = await context.newPage()
    await page_two.goto("https://www.google.com")
    await page_one.goto("https://www.flipkart.com")
    await page.goto("https://www.amazon.in")

    const allPages = context.pages()
    console.log(allPages.length)

    for (let eachPage of allPages) {
        console.log(eachPage.url())
    }
    const amazonPage = allPages[0];
    const flipkart = allPages[1]
    const googlePage = allPages[2]

    const title = await amazonPage.title()
    console.log(title)
    await amazonPage.fill("#twotabsearchtextbox", "Phones")
    await amazonPage.bringToFront()


})

test("Hnadling window with sequential approach", async ({ page, context }) => {

    await page.goto("https://www.leafground.com/window.xhtml")
    console.log(await page.title())
    //create a promise w.r.t page 
    const pagePromise = context.waitForEvent('page')
    await page.getByText("Open", { exact: true }).click(); //actual action to be performed which opens a page
    //resolve the promise to have the reference of new page
    const newPage = await pagePromise;
    console.log(newPage.url())
    console.log(await newPage.title())
    // await newPage.bringToFront();
    await newPage.locator("#email").fill("vidya@gmail.com")
    await newPage.waitForTimeout(3000)

})

test.only("Hnadling window with concurrent approach", async ({ page, context }) => {

   // await context.clearCookies();
    await page.goto("https://www.leafground.com/window.xhtml")
    console.log(await page.title())
    //create a promise w.r.t page 
    const [multiplePromise] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText("Open Multiple", { exact: true }).click()
    ])
    //  [amazon,flipkart,google]
    const tabCount = multiplePromise.context().pages()
    console.log(tabCount.length)


    for (let eachTab of tabCount) {
        console.log(eachTab.url())
    }       
    let windowName="Web Table"
    let tablePage: any
    for (let i = 0; i < tabCount.length; i++) {
        const title = await tabCount[i].title() 
// if(i>0){
// await tabCount[i].close()
//}
        if (title ===windowName) {
            tablePage = tabCount[i]
        }
    }
    await tablePage.locator("(//i[@class='pi pi-search'])[2]/following-sibling::input").fill("Australia")
    await tablePage.close()
    await page.locator("//i[@class='pi pi-home layout-menuitem-icon']").click();

})

test.only("Hnadling window with concurrent approach", async ({ page, context }) => {

    await page.goto("https://www.leafground.com/window.xhtml")
    console.log(await page.title())
    //create a promise w.r.t page 
    const [firstPage,secondPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText("Open Multiple", { exact: true }).click()
    ])

    //  [amazon,flipkart,google]
    const tabCount = context.pages()
    console.log(tabCount.length)
  console.log(await firstPage.title())  
   })





