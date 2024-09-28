export class Employee{
    empName:string;
    empId:string
   private  empSalary:number
   protected phno:number
    // readonly page:string  //equivalent to final

    constructor(){
        this.empName="Lavanya";
        this.empId="122"
        this.empSalary=6728393
        this.phno=87930202742
    }

   public displyEmpDetails(){
    console.log(`${this.empName},${this.empId},${this.empSalary},${this.phno}`)
   }
 //give the permisssion to read the data
   public get readSalary(){
    return this.empSalary 
   }

   public set writeValue(newSalary:number){
   this.empSalary=newSalary
   }
  }

const emp=new Employee();
emp.displyEmpDetails()
console.log(emp.empId)
console.log("Old Value"+emp.readSalary)
emp.writeValue=78020467
console.log("New Value" +emp.readSalary)


//inheritance 
