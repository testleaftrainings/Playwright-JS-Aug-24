import test from "@playwright/test";


test("File Upload",async({page})=>{
    
    await page.goto("https://www.leafground.com/file.xhtml")

    //using setInput files

    await page.locator(".card").filter({hasText:"Basic Upload"})
    .locator("input[type='file']").setInputFiles("./tests/day08/servicenow.txt")
    //using fileChooser
     const filePromise= page.waitForEvent('filechooser')
     await page.locator("[class$='ui-icon-plusthick']").last().click()
     const fileupload=await filePromise;
     const boolean= fileupload.isMultiple()
     await fileupload.setFiles(["./tests/day08/testleaf_logo.jpeg","./tests/day08/sf.jpg"])
})


test.only("File Download",async({page})=>{
    
    await page.goto("https://www.leafground.com/file.xhtml")

    //using fileChooser
     const downloadPromise= page.waitForEvent('download')
     await page.getByText("Download",{exact:true}).click()
     const download=await downloadPromise;
     await download.saveAs(download.suggestedFilename())
     
})

