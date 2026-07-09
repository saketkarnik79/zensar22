import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-component',
  imports: [],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {
  //@Output() employeeSelected = new EventEmitter<string>();
  @Output() employeeSelected = new EventEmitter<Employee>();

  // selectEmployee(employeeName: string) {
  //   this.employeeSelected.emit(employeeName);
  // }

  selectEmployee() {
    const employee: Employee = {
      name: 'John Doe',
      department: 'Engineering',
      salary: 75000,
    };
    this.employeeSelected.emit(employee);
  }
}