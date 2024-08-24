let takkal=new Promise((resolve,reject)=>{
    let isbookingsuccessful=true;
     if(isbookingsuccessful){
        setTimeout(() => {            
            resolve("Thank you")
        }, 2000);
     }
     else{
        reject("Badluck")
     }
})

// takkal.then((result)=>console.log("Booking successful :"+result))
//        .catch((declined)=>console.log("Not successful :"+declined))


async function handleBooking() {
  
try{
    let bookingStatus= await takkal
    console.log(bookingStatus)
}catch(error){
    console.log(error)
}
}
handleBooking()