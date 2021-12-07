import { Injectable } from '@angular/core';
import { Employee } from '../entity/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  allEmp : Employee[] = [
    {
      "id" : "1",
      "firstName" : "Vishal",
      "lastName" : "Kukreja",
      "age" : 28,
      "designation" : "Developer"
    }
  ];

  getAllEmployees():Employee[]{
    return this.allEmp;
  }

  addEmployee( employee:Employee){
    this.allEmp.push(employee);
  }

  updateEmployee(employee:Employee) {
    var updEmp = this.allEmp.find(emp => emp.id  == employee.id);
    updEmp.firstName = employee.firstName;
    updEmp.lastName = employee.lastName;
    updEmp.age = employee.age;
    updEmp.designation = employee.designation;
  }

  deleteEmployee(id:string){
    this.allEmp = this.allEmp.filter(emp => emp.id != id);
  }

  getEmployee(id:string):Employee {
    return this.allEmp.find(emp => emp.id == id);
  }
  
}
