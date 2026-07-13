import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProductsComponent } from './products-component/products-component';
import { AboutComponent } from './about-component/about-component';
import { ProductDetailsComponent } from './product-details-component/product-details-component';
import { AdminComponent } from './admin-component/admin-component';
import { UsersComponent } from './users-component/users-component';
import { SettingsComponent } from './settings-component/settings-component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    }
];
