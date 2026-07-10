import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-employee-component',
  imports: [],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}
