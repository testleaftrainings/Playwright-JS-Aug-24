interface ElementAction{
    eleName:string
    validateElement():void;
}


interface BrowserType {
    browserSetup():void
}

//object creation is not allowed

class ElementImpl implements ElementAction,BrowserType {
    eleName: string;

    constructor(){
        this.eleName="Login"
    }
    browserSetup(): void {
       console.log("ChromeBrowser")
    }
 

    validateElement(): void {
        console.log("Validate the 'element with visibility")
    }

}


const doClick=new ElementImpl();
doClick.validateElement();