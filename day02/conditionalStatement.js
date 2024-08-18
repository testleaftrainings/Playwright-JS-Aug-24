
//if-else-if block
// function getBrowser(){
//    if(browserName =='chrome'){
//     console.log("Launch chrome browser")
//    }
//    else if(browserName=='firefox'){
//     console.log("Launch firefox browser")
//    }
//    else{
//     console.log("Unsupported browser")

//    }
// }
// let browserName='firefox'
// getBrowser();

//switch block

function getBrowserName(){

    switch(browser){
        case 'chrome':
            console.log("Launching chrome")
          break;
            case 'edge':
                console.log("Launching edge")
            break;
                case 'firefox':
                    console.log("Launching firefox")
             break;  //stop the execution
               default:
                console.log("Unsupported browser")
             break;
    }

}


let browser='chrome'
getBrowserName()