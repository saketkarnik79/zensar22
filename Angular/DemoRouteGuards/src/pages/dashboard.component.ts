import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, RouterModule],
    template: `
        <div class="dashboard">
            <h1>Dashboard</h1>
            <div class="card">
                <h3>User Details</h3>
                <p>
                    <strong>Logged In:</strong>
                        {{ authService.isLoggedIn }}
                </p>
                <p>
                    <strong>Role:</strong>
                        {{ authService.role }}
                </p>
            </div>
            <div class="card">
                <h3>Guards Demo</h3>
                <ul>
                    <li>
                        <a routerLink="/employee/101">
                            Resolve Guard Demo
                        </a>
                    </li>
                    <li>
                        <a routerLink="/profile/edit">
                            CanDeactivate Guard Demo
                        </a>
                    </li>
                    <li>
                        <a routerLink="/reports">
                            CanMatch Guard Demo
                        </a>
                    </li>
                    <li>
                        <a routerLink="/admin/users">
                            Admin Users (CanActivateChild)
                        </a>
                    </li>
                    <li>
                        <a routerLink="/admin/roles">
                            Admin Roles (CanActivateChild)
                        </a>
                    </li>
                </ul>
            </div>
            <button class="logout-btn" (click)="logout()">
                Logout
            </button>
        </div>
    `,
    styles:[`
                .dashboard {
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                h1 {
                    color: #1976d2;
                    margin-bottom: 20px;
                }
                .card {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    border: 1px solid #ddd;
                }
                ul {
                    padding-left: 20px;
                }
                li {
                    margin-bottom: 10px;
                }
                a {
                    text-decoration: none;
                    color: #1976d2;
                    font-weight: 500;
                }
                a:hover {
                    text-decoration: underline;
                }
                .logout-btn {
                    background: #d32f2f;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .logout-btn:hover {
                    background: #b71c1c;
                }
        `]
})
export class DashboardComponent {
    authService = inject(AuthService);
    private router = inject(Router);
    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}