//Named function/Function declaration


// userDetails("Shamili")   //function hoisting

// function userDetails(userName){
//     console.log(`${userName}`)
// }



//console.log(user("Raja"))  throws error
//Function expression with named function
// let user=function fnExp(firstname){
//     console.log("enterFirstname")
//     return firstname // to retreive the value form the function block(local value ) and use it to other function
// }

// console.log(user("Raja"))

// //Function expression with anonymous function
let user2=function(firstname){
    let empid=123
    let username="Sri123"
    console.log("enterFirstname")
    return `${firstname}:${empid}:${username}` // to retreive the value form the function block(local value ) and use it to other function
}

// console.log(user2("Sriram"))


//IIF
(function(firstname ,lastname){
    console.log("Learning IIF")
    return `${firstname}:${lastname}`
})("vidya","bharathi");


//Arrow function
let arrowFn=(a,b)=>{ console.log(a+b);  //short code structure

}
arrowFn(2,3)