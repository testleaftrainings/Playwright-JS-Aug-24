class Login{
username:string=""
password:string=""

// constructor(){

// }

  loginPage(user:string,pass:string):string{  
    this.username=user
    this.password=pass
    return `${user} : ${pass}`
  }
}

const login=new Login();//default constructor
console.log(login.loginPage("Vidya","123"));

//use the methods of class
//create an object reference
//objeRef.methodname()

//Hirerachy of executiom
//constructor 
//normalmethod