import { Component } from "@angular/core";
import { CanLeave } from "../guards/canleave";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-profile-edit',
    imports:[FormsModule],
    template: `
        <h2>Edit Profile</h2>
        <input [(ngModel)] = "name"/>
        <button (click)="save()">Save</button>
    `
})
export class ProfileEditComponent implements CanLeave{
    name: string = '';

    saved: boolean = false;

    save(): void{
        this.saved = true;
    }

    hasUnsavedChanges(): boolean {
        return !this.saved;
    }
}