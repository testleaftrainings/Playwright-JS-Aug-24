class LaunchBrowser{
   browserName:string="Chrome"
   browserVersion:number=120

  printBrowserdetails(){
        console.log(`The Browser details are ${this.browserName} : ${this.browserVersion}`)
  }
   //this -->current class object/method

///create obj ref -->to acces the class peoperty/ method
//new keyword
//new LaunchBrowser() npt allowed
}

// to access the method/ property outside the class 

const lbrowser=new LaunchBrowser(); //constructor to allocate memeory for the class property/method
lbrowser.printBrowserdetails();


  