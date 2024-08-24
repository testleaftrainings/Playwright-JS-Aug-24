
function enterUsername(){
setTimeout(() => {
    console.log("User entered the username")
}, 300);
    
}

function enterPassword(){
    setTimeout(() => {
        console.log("User entered the password")
    }, 500);
   
}




//converting the above sync to async program

function enterUserName(){
    //wait stmt to run as asynchronous   
    setTimeout(() => {
        console.log("User entered the username with delay")
    }, 200);
       
     //4s delay
}

function enterPwd(){
    setTimeout(() => {
        console.log("User entered the password with delay")
    }, 1000);
}

enterUserName();
enterPwd();
enterPassword();
enterUsername();