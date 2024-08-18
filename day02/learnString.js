
//Declaraing string 
//literal 
//using new keyword

// literal way -->pool memory -->part of a heap memory
// new keyword -->heap memory

let user="santhosh" //less memory consumption
let user2="santhosh"
let username=new String("santhosh") //allocates new memory for evey new keyword declaration

console.log(user===username) 
console.log(user===user2)

//get the length of string

let len=user.length
console.log(len)

//postion of the character in the string
console.log(user.charAt(3))


// //last indexed value

// console.log(user.charAt(len-1))

console.log(user.lastIndexOf('h'))//last matching index
console.log(user.indexOf('h')) //first matching index

// let firstname="Testleaf"
// //check partial match of the value
// console.log(firstname.includes("L"))

// console.log(firstname.toLowerCase())
// console.log(firstname.slice(4))   //substring based on index  - retreive comple value with the start index
// console.log(firstname.substring(4,6))//-end index will be ignored

// //replace the characters

// console.log(firstname.replace("T","$"))

console.log(firstname.replaceAll("T","$"))
// //logic to reverse

// //Sriram --> marirs 
// //reach end of the reach
// //last character bring to the first index

// console.log(firstname.split("a")) //delimiter

//logic will be helpful in reversing the sentence  --> I m learning JS

// function reverseString(inputData){
//         let charOfstring=inputData.split(" ")      
//          console.log(charOfstring)
//         let finalString="";
//         for(let index=charOfstring.length-1;index>=0;index--){
//             finalString= finalString+charOfstring[index]+" "            
//         }
//         return finalString;
// }

//  console.log( reverseString("I am learning Javascript"))

//length -->number of characters in the string
//travel the string -->index based start with 0
//length=8 , i=8 -->character ??  0 to 7 
//let index=7, 7>=0 ,  
 // logic ,index-- -->6

 //we am  learning Javascript in testleaf
 //ew ma gninrael tpircsavaJ
 //reverse even positoned words
//ew am gninrael Javascript ni testleaf


 let uname ="User Logged in to the app"
console.log(uname.split(" ").reverse().join(" "))


let pdtPrice="Rs1200"
let replacesWord=pdtPrice.replace("Rs","")
console.log(pdtPrice)
console.log(replacesWord)
console.log(replacesWord +12)  //stirng +number -->120012 ->append (concat)
//1212
//convert the string into number

let price=parseInt(replacesWord)
let newPrice=price+12  //-->1200+12 add operation
newPrice.toString()


