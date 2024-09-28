"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // readonly page:string  //equivalent to final
    function Employee() {
        this.empName = "Lavanya";
        this.empId = "122";
        this.empSalary = 6728393;
        this.phno = 87930202742;
    }
    Employee.prototype.displyEmpDetails = function () {
        console.log("".concat(this.empName, ",").concat(this.empId, ",").concat(this.empSalary, ",").concat(this.phno));
    };
    Object.defineProperty(Employee.prototype, "readSalary", {
        //give the permisssion to read the data
        get: function () {
            return this.empSalary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "writeValue", {
        set: function (newSalary) {
            this.empSalary = newSalary;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee();
emp.displyEmpDetails();
console.log(emp.empId);
console.log("Old Value" + emp.readSalary);
emp.writeValue = 78020467;
console.log("New Value" + emp.readSalary);
//inheritance 
