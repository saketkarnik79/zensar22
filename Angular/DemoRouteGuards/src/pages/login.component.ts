import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    imports: [CommonModule, FormsModule],
    template: `
        <div class="container">
            <h2>Employee Portal Login</h2>
            <div class="form-group">
                <label>Username</label>
                <input type="text" [(ngModel)]="username" placeholder="Enter username">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" [(ngModel)]="password" placeholder="Enter password">
            </div>
            <button (click)="login()">
                Login
            </button>
            <p class="error" *ngIf="errorMessage">
                {{ errorMessage }}
            </p>
        </div>
    `,
    styles: [`
                .container {
                    width: 400px;
                    margin: 50px auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                }
                h2 {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .form-group {
                    margin-bottom: 15px;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                }
                input {
                    width: 100%;
                    padding: 10px;
                    box-sizing: border-box;
                }
                button {
                    width: 100%;
                    padding: 12px;
                    cursor: pointer;
                    background-color: #1976d2;
                    color: white;
                    border: none;
                    border-radius: 4px;
                }
                .error {
                    color: red;
                    margin-top: 15px;
                }
            `]
})
export class LoginComponent {
    username = '';
    password = '';
    errorMessage = '';

    private authService = inject(AuthService);
    private router = inject(Router);
    
    login() {
        if ( this.username === 'admin' && this.password === 'admin123' ) {
            this.authService.isLoggedIn = true;
            this.authService.role = 'admin';
            this.router.navigate(['/dashboard']);
        }
        else if ( this.username === 'user' && this.password === 'user123' ) {
            this.authService.isLoggedIn = true;
            this.authService.role = 'user';
            this.router.navigate(['/dashboard']);
        }
        else {
            this.errorMessage = 'Invalid username or password';
        }
    }
}