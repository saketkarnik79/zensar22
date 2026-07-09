import { Component, Input } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css',
})
export class EmployeeCard {
  // @Input() employeeName!: string;

  // @Input() department!: string;

  // @Input() salary!: number;

  @Input() employee!: Employee;
}