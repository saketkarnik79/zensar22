import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

export const employeeResolver: ResolveFn<any> = (route) => {
    const service = inject(EmployeeService);

    return service.getEmployee(route.paramMap.get('id')!);
}