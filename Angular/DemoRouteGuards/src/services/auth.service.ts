import { Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService{
    isLoggedIn: boolean = false;

    role: string = '';

    isAuthenticated(): boolean{
        return this.isLoggedIn;
    }

    isAdmin(): boolean{
        return this.role === 'admin';
    }

    login(role: string){
        this.isLoggedIn = true;
        this.role = role;
    }

    logout() {
        this.isLoggedIn = false;
        this.role = '';
    }
}