import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateChildFn = () => {
    const auth = inject(AuthService);

    return auth.isAdmin();
}