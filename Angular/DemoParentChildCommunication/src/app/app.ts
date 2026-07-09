import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCard } from './employee-card/employee-card';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo Parent-Child Communication');

  // employee = {
  //   name: 'John Doe',
  //   department: 'Engineering',
  //   salary: 75000
  // };

  employee: Employee = {
    name: 'John Doe',
    department: 'Engineering',
    salary: 75000
  };
}
