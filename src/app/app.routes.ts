import { Routes } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';
import { LoginComponent } from './web/login/login.component';
import { RegisterComponent } from './web/register/register.component';
import { UsersComponent } from './panel/users/users.component';
import { RolesComponent } from './panel/roles/roles.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegisterComponent
    },
    {
        path: 'panel',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
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
   
];
