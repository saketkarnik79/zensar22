import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-admin',
    imports: [CommonModule, RouterOutlet, RouterModule],
    template: `
        <div class="admin-container">
            <h1>Admin Portal</h1>
            <p> This section is protected by <strong>CanActivateChild Guard</strong>.</p>
            <nav>
                <a routerLink="users" routerLinkActive="active">Users</a>
                <a routerLink="roles" routerLinkActive="active">Roles</a>
            </nav>
            <hr />  
            <!-- Child Routes Render Here -->
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
               .admin-container {
                    max-width: 900px;
                    margin: 40px auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                h1 {
                    color: #1976d2;
                }
                nav {
                    margin: 20px 0;
                }
                nav a {
                    margin-right: 20px;
                    text-decoration: none;
                    color: #1976d2;
                    font-weight: 600;
                }
                nav a.active {
                    color: #d32f2f;
                }
                hr {
                    margin: 20px 0;
                } 
        `]
})
export class AdminComponent{}