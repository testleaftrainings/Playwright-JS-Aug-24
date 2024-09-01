let username="Sriram"
username="123"
console.log("Learning ts")

const pwd=123;



//explicit inference

let user:string="Vidya"
let password:number=234
let isActive:boolean=true
let userCredentials:any="Demo"
userCredentials=123
userCredentials=false
userCredentials=null
let maskingpwd=password.toString()
let isSuccess;

isSuccess="Pass";
isSuccess=1
isSuccess=true



let empDetails:{
    firstname:string,
    lastname:string,
    phno:number
}[]=[{
    firstname:"Vidya",
    lastname:"R",
    phno:79303004729
},
{
    firstname:"Vinod",
    lastname:"R",
    phno:793030784729
}

]

console.log(empDetails[0].firstname)