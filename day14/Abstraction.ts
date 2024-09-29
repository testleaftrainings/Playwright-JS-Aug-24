interface PWWrappermethod{
   hoverAndClick():void;
}

interface testReport extends PWWrappermethod{
    generatecustomReport():void;
}

class Login extends WrapperMethod implements testReport{
    typeAndTab(): void {
        console.log("Type and Tab")
    }
    takeScreenshot(): void {
       console.log("Take Screenshot")
    }
    hoverAndClick(): void {
      console.log("Hover and Click")
    }
    generatecustomReport(): void {
       console.log("Generate report using custom impl")
    }
    
}