import { Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService{
    getEmployee(id: string){
        return { id, name: 'James Smith', designation: 'Software Engineer'};
    }
}