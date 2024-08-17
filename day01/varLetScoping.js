
//scoping -->level of accessbility
//global scoping
//function scoping
//block scoping

//var  is global/function scoping variable
//let is block scoping variable

{
  //  ...
}



//reusable logic 
var gender="female"   //global variable
function printGender(){
    var age=30; //function scoping variable
 if(gender.startsWith('m')){ 
        let color="pink"   //block scope variable
    console.log("She/Her")     
    }else{
        console.log("He/Him")
    } 
    console.log(color)  //throw as not defined
}
printGender()
