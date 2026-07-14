import { Component} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-employee',
    template: `
        <h2>{{ employee.name }}</h2>
        <p>{{ employee.designation }}</p>
    `
})
export class EmployeeComponent{
    employee: any;

    constructor(private route: ActivatedRoute){
        this.employee = this.route.snapshot.data['employee'];
        console.log(this.employee);
    }
}