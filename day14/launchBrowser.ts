import {chromium, Page} from '@playwright/test'

export class LaunchApp{

     userpage:Page; //userdefined

    constructor(lpage:Page){ //lpage -->userdefined
        this.userpage=lpage
    }

    async navigate(){
        //this.page  -->class proerty -->which userdefined
        await this.userpage.goto("http://leaftaps.com/opentaps/control/main")
    }

    async doLogin(){
        await this.userpage.fill("#username","demosalesManager")
        await this.userpage.fill("#password","crmsfa")
        await this.userpage.click(".decorativeSubmit")
        await this.userpage.close();
    }//creating page property -->Page -->interface
}

// async function LoginFunctionality(){        
//     const browser=await chromium.launch({headless:false})
//     const context=await browser.newContext();
//     const page=await context.newPage(); //address -session of the page

//     const login=new LaunchApp(page)
//     await login.navigate();
//     await login.doLogin();
// }

//LoginFunctionality();