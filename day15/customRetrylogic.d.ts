
//inject the custom method in playwright/test
import {Page}  from '@playwright/test'


declare module '@playwright/test'{
    interface Page{
        delayedFill:(locator:string,data:string)=>promise<void>
        delayedCick:(locator:string)=>promise<void>
    }
}

//fnname:()=>promise<void>