import { CanDeactivateFn } from '@angular/router';
import { CanLeave } from './canleave';

export const unsavedChangesGuard: CanDeactivateFn<CanLeave> = (component) => {
    if(component.hasUnsavedChanges()){
        return confirm('You have unsaved changes. Still want to leave page?');
    }
    return true;
}