import test from "@playwright/test";
import { LaunchApp } from "./launchBrowser";

test(`Login function using class methods`,async({page})=>{
      const lp=new LaunchApp(page)
      await lp.navigate();
      await lp.doLogin();    
})