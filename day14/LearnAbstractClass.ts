abstract class WrapperMethod implements PWWrappermethod{
   hoverAndClick(): void {
    
   }  
   typeAndEnter(){
        console.log("Type in field and Enter")
   }
   abstract typeAndTab():void;
   abstract takeScreenshot():void;
}

//creating obj for the abstract class is not allowed
//const appMeth=new WrapperMethod()

class BaseClass extends WrapperMethod{
    typeAndTab(): void {
        console.log("Type in the filed and tab")
    }
    takeScreenshot(): void {
      console.log("Take screenshot")
    } 

    openUrl(){
        console.log("Open google page")
    }
}

const baseClass=new BaseClass()
baseClass.typeAndEnter() //inheritance
baseClass.openUrl()
baseClass.takeScreenshot()
baseClass.typeAndTab()