import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent {

  @Input() employee: Employee;

  @Output() refreshEmployeeList: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private employeeService: EmployeeService, private router: Router) { 
  }

  editEmployee(){
    this.router.navigate(["EditEmployee/"+ this.employee.id]);
  }

  deleteEmployee(employeeToDelete: Employee){
    var result = confirm("Are you sure, you want to delete this Employee?");
    if (result) {
      this.employeeService.deleteEmployee(this.employee.id);
      this.refreshEmployeeList.emit(true);
      this.router.navigate(["Employees"]);
    }
  }
}
