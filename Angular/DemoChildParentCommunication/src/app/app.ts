import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee-component/employee-component';
import { Employee } from './models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo Child-Parent Communication');

  //selectedEmployee: string = '';
  selectedEmployee: Employee | null = null;

  // receiveEmployee(employeeName: string) {
  //   this.selectedEmployee = employeeName;
  // }

  receiveEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }
}