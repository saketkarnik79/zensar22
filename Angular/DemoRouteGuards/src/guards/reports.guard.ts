import { CanMatchFn } from '@angular/router';

export const reportsGuard: CanMatchFn = () => {
    const reportsEnabled = true;
    return reportsEnabled;
}