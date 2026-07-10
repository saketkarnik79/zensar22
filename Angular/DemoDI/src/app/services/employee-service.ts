import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { LoggerService } from './logger-service';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EmployeeService {

    constructor(private logger: LoggerService ){}

    employees: Employee[] = [
       { id: 1, name: 'James' },
       { id: 2, name: 'Smith' }
    ];

    getEmployees() : Employee[] {
        this.logger.log('GetEmployees() in EmployeeService Invoked...');

        return this.employees;
    }

    addEmployee(emp: Employee):void{
        this.employees.push(emp);
    }
}
