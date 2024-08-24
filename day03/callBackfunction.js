// function login(){
//     console.log("Waiting for the userfield to visible")
// }

// setTimeout(login, 3000);

//looselycoupled 
// function printDetails(){
//     console.log("BrowserDetails")
//     launchBrowser()
// }

// function launchBrowser(){
//     console.log("Launching chrome Browser")
// }
// printDetails()

//callback
//calling one function into another function as parameter

// function welcome(greet){
//     setTimeout(() => {
//         console.log("Hello")
//     }, 2000);
//     greet();
// }

// function printDetails(){
//     console.log("Arrived")
// }

// welcome(printDetails)

//callback hell  -->nested callback
function getBrowser(){
    setTimeout(() => {
    console.log("Calling chrome Browser")    
         }, 200);
     setTimeout(() => {
       console.log("App is launched")
     }, 2000);
    setTimeout(() => {
      console.log("browser version")
   }, 1000);
}

getBrowser()


//async -->sync ->automation
