function userRegistration(fName:string, lName:string, phone:number, surName?:string, age?:number):void {
    console.log(`The user details are ${fName}, ${lName}, ${phone}, ${surName}, ${age}`);
}
//Calling the function
userRegistration("Vinod", "Krishna", 987654321, "Srinivas");


function empProfile(name:string, dob:string, status:string= "Available", userId?:number){
    console.log(`User profile: ${name}, ${dob}, ${status}, ${userId}`);
}
empProfile("Ravindran", "03/04/1995", undefined, 44);