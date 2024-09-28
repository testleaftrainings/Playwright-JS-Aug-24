class LoadApp{
    browserName:string;
    browserVersion:number;
    //parametrized constructor -->assigning the value/calling the property with assigned while creating the object
    constructor(bName:string,bVersion:number){
        this.browserName=bName;
        this.browserVersion=bVersion
        this.printBrowserdetails()
    }  
   printBrowserdetails(){
         console.log(`The Browser details are ${this.browserName} : ${this.browserVersion}`)
   }

   loadUrl(){
    console.log("Load the amazon url")
   }

 }

const launchChrome=new LoadApp("Chrome",123) 
launchChrome.loadUrl();

new LoadApp("Edge",109) 
new LoadApp("Webkit",119)
 


