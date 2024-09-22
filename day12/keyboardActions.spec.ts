import test from "playwright/test";



test(`Using Keyboard`,async({page})=>{    
    await page.goto(`https://snapdeal.com/`)
    const searchField= page.locator("#inputValEnter")
     await searchField.fill("Mobile")
     await page.waitForTimeout(2000)
     await page.keyboard.type("Accessories")
     await page.waitForTimeout(2000)
     await searchField.press("Control+A")
     await searchField.press("Backspace")   
})

test(`Using Mouse`,async({page})=>{    
    await page.goto(`https://snapdeal.com/`)
    const searchField= page.locator("#inputValEnter")
     await searchField.fill("Mobile")
    await page.getByText(`Men's Fashion`,{exact:true}).nth(0).hover()
    await page.mouse.wheel(0,500)

  })

  test(`Mouse actions drag`,async({page})=>{
    await page.goto("https://www.leafground.com/drag.xhtml")
    const srcele= page.locator(`//p[text()='Drag to target']`)
    const trgEle=page.locator(`//p[text()='Drop here']`)
    await page.waitForTimeout(3000)
     await srcele.click({button:"right"})
     await page.waitForTimeout(4000)
     await srcele.dblclick();
    await srcele.dragTo(trgEle);
  
 
 })