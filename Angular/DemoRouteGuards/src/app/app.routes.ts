import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { adminGuard } from '../guards/admin.guard';
import { ProfileEditComponent } from '../pages/profile-edit.component';
import { unsavedChangesGuard } from '../guards/unsaved-changes.guard';
import { EmployeeComponent } from '../pages/employee.component';
import { employeeResolver } from '../guards/employee.resolver';
import { reportsGuard } from '../guards/reports.guard';
import { LoginComponent } from '../pages/login.component';
import { DashboardComponent } from '../pages/dashboard.component';
import { AdminComponent } from '../pages/admin.component';
import { UsersComponent } from '../pages/users.component';
import { RolesComponent } from '../pages/roles.component';
import { ReportsComponent } from '../pages/reports.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard],
        canActivateChild: [adminGuard],
        children: [
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'roles',
                component: RolesComponent
            }
        ]
    },
    {
        path: 'profile/edit',
        component: ProfileEditComponent,
        canDeactivate: [unsavedChangesGuard]
    },
    {
        path: 'employee/:id',
        component: EmployeeComponent,
        resolve: {
            employee: employeeResolver
        }
    },
    {
        path: 'reports',
        component: ReportsComponent,
        canMatch: [reportsGuard]
    }
];
