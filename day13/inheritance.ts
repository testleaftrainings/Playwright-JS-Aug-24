import { Employee } from "./learnAccessmodifier"

class HR extends Employee{
    // constructor(){
    //     super()    //mandatory to call the super keyword   
    //     this.printEmpDtails()
    // }
    printEmpDtails(){   
        super.writeValue=23467599
        console.log(super.readSalary) 
        console.log("Details of Emp")
    }
    public displyEmpDetails() {
         console.log("From child class") //overriding
    }

}

const hrdept=new HR() 
 hrdept.displyEmpDetails()