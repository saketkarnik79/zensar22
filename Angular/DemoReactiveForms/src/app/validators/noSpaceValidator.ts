import { AbstractControl, ValidationErrors } from "@angular/forms";

function noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if(value?.includes(' ')){
        return { noSpace: true };
    }

    return null;
}

export { noSpaceValidator };